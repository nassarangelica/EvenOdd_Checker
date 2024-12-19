document.getElementById('checkButton').addEventListener('click', async () => {
    console.log('Button clicked');
    const number = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('resultSection');
  
    if (!number) {
      resultElement.textContent = 'Please enter a number.';
      return;
    }
  
    try {
      const response = await fetch(`https://api.isevenapi.xyz/api/iseven/${number}/`);
      if (!response.ok) {
        throw new Error('API request failed');
      }
  
      const data = await response.json();
      resultElement.textContent = data.iseven ? `${number} is even.` : `${number} is odd.`;
    } catch (error) {
      resultElement.textContent = 'Error fetching the API.';
      console.error(error);
    }
});
