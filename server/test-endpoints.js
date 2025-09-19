const http = require('http');

// Test the root endpoint
console.log('Testing root endpoint...');
http.get('http://localhost:3001/', (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('Root endpoint status:', res.statusCode);
    try {
      const parsed = JSON.parse(data);
      console.log('Response:', parsed);
    } catch (e) {
      console.log('Not JSON response. Length:', data.length);
      console.log('First 100 chars:', data.substring(0, 100));
    }
    
    // Test the featured cities endpoint
    testFeaturedEndpoint();
  });
}).on('error', (err) => {
  console.error('Error accessing root endpoint:', err.message);
});

function testFeaturedEndpoint() {
  console.log('\nTesting featured cities endpoint...');
  http.get('http://localhost:3001/api/weather/featured', (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      console.log('Featured endpoint status:', res.statusCode);
      try {
        const parsed = JSON.parse(data);
        console.log('Response:', parsed);
      } catch (e) {
        console.log('Not JSON response. Length:', data.length);
        console.log('First 100 chars:', data.substring(0, 100));
      }
    });
  }).on('error', (err) => {
    console.error('Error accessing featured endpoint:', err.message);
  });
}