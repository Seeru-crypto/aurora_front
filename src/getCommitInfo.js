const { execSync } = require('child_process');

function getLastCommitDate() {
  try {
    // Get the last commit date using git log
    const commitDate = execSync('git log -1 --format=%cd', { encoding: 'utf-8' });
    return commitDate.trim();
  } catch (error) {
    console.error('Error fetching last commit date:', error);
    return null;
  }
}

// If this script is executed directly, log the last commit date
if (require.main === module) {
  // console.log(getLastCommitDate());
}

module.exports = getLastCommitDate;
