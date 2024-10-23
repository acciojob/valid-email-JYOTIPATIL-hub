function validEmail(str) {
    // Define the regex pattern for validating email addresses
    const emailPattern = /^[a-zA-Z0-9]+[a-zA-Z0-9.-]*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    
    // Check if the string matches the email pattern
    return emailPattern.test(str);
}