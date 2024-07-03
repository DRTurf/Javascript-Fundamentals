function extractGroups(pattern, inputString) {
    const regex = new RegExp(pattern);
    const match = regex.exec(inputString);
  
    if (match) {
      const groups = match.slice(1); 
      return {
        match: true,
        groups: groups
      };
    } else {
      return {
        match: false,
        groups: []
      };
    }
  }
  const pattern = '(\\d{2})-(\\d{2})-(\\d{4})'; 
  const testString = 'Today is 04-07-2024.';
  
  const result = extractGroups(pattern, testString);
  
  if (result.match) {
    console.log('Day:', result.groups[0],'Month:', result.groups[1],'Year:', result.groups[2]);
  } else {
    console.log('No match found.');
  }
  