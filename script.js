function trackPackage() {
    const trackingNumber = document.getElementById('tracking-number').value;
    const trackingInfo = document.getElementById('info');

    // Mock tracking data
    const mockData = {
        "123456": "Your package is on the way! Estimated delivery: 2 days.",
        "654321": "Your package has been delivered!",
        "789012": "Your package is in transit.",
    };

    // Check if tracking number exists in mock data
    if (mockData[trackingNumber]) {
        trackingInfo.innerText = mockData[trackingNumber];
    } else {
        trackingInfo.innerText = "Tracking number not found. Please try again.";
    }

    // Show tracking info section
    document.getElementById('tracking-info').style.display = 'block';
    document.getElementById('tracking-form').style.display = 'none';
}

function resetTracking() {
    document.getElementById('tracking-number').value = '';
    document.getElementById('tracking-info').style.display = 'none';
    document.getElementById('tracking-form').style.display = 'block';
}