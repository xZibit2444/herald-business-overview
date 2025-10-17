<?php
// Simple email sending endpoint
// Accepts JSON POST: { firstName, lastName, email, company, service, message }
// Responds with JSON

header('Content-Type: application/json; charset=utf-8');

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Parse JSON body
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    // Fallback to form-encoded
    $data = $_POST;
}

function get_field($arr, $key) {
    return isset($arr[$key]) ? trim((string)$arr[$key]) : '';
}

$firstName = get_field($data, 'firstName');
$lastName  = get_field($data, 'lastName');
$email     = get_field($data, 'email');
$company   = get_field($data, 'company');
$service   = get_field($data, 'service');
$message   = get_field($data, 'message');

// Basic validation
if ($firstName === '' || $lastName === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Missing required fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid email']);
    exit;
}

$to = 'info@heraldbusiness.org';
$subject = 'Business Inquiry from ' . $firstName . ' ' . $lastName;

$body = "Name: {$firstName} {$lastName}\n" .
        "Email: {$email}\n" .
        "Company: {$company}\n" .
        "Service: {$service}\n" .
        "Message:\n{$message}\n";

// Build headers: set From as domain address if possible; set Reply-To to user
$from = 'no-reply@' . ($_SERVER['HTTP_HOST'] ?? 'heraldbusiness.org');
$headers = [];
$headers[] = 'From: ' . $from;
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

$success = @mail($to, $subject, $body, implode("\r\n", $headers));

if ($success) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to send email. Server mail() is not configured.']);
}
?>