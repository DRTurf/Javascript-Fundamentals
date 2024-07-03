function getEstimatedDeliveryTime(packageType) {
    let deliveryTime;
  
    switch (packageType) {
      case 'standard':
        deliveryTime = '3-5 days';
        break;
      case 'express':
        deliveryTime = '1-2 days';
        break;
      case 'overnight':
        deliveryTime = 'next day';
        break;
      default:
        deliveryTime = 'unknown';
    }
  
    return deliveryTime;
  }
  
  const packageTypes = ['standard', 'express', 'overnight', 'same day'];
  
  packageTypes.forEach(packageType => {
    const deliveryTime = getEstimatedDeliveryTime(packageType);
    console.log(`The estimated delivery time for ${packageType} package is: ${deliveryTime}`);
  });
  