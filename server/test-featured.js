const http = require('http');

// Test the featured cities endpoint
console.log('Testing featured cities endpoint...');
http.get('http://localhost:5003/api/weather/featured', (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('Featured endpoint status:', res.statusCode);
    try {
      const parsed = JSON.parse(data);
      console.log('Response:', JSON.stringify(parsed, null, 2));
    } catch (e) {
      console.log('Not JSON response. Length:', data.length);
      console.log('First 100 chars:', data.substring(0, 100));
    }
  });
}).on('error', (err) => {
  console.error('Error accessing featured endpoint:', err.message);
});