// Replace this with your API Gateway URL from Step 5
const API_ENDPOINT = 'YOUR_API_GATEWAY_URL/generate';

async function generateCode() {
    const promptElement = document.getElementById('prompt');
    const generateButton = document.getElementById('generate');
    const outputElement = document.getElementById('output');
    const errorElement = document.getElementById('error');

    // Clear previous error
    errorElement.textContent = '';

    // Get the prompt text
    const prompt = promptElement.value.trim();
    if (!prompt) {
        errorElement.textContent = 'Please enter a prompt';
        return;
    }

    try {
        // Disable button and show loading state
        generateButton.disabled = true;
        generateButton.textContent = 'Generating...';
        outputElement.textContent = 'Generating code...';

        // Make API call
        const response = await axios.post(API_ENDPOINT, {
            prompt: prompt
        });

        // Display the generated code
        outputElement.textContent = response.data.code;
    } catch (error) {
        console.error('Error:', error);
        errorElement.textContent = 'Error generating code. Please try again.';
        outputElement.textContent = '';
    } finally {
        // Reset button state
        generateButton.disabled = false;
        generateButton.textContent = 'Generate Code';
    }
}