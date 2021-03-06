const getTimeStamp = dateTime => new Date(dateTime).getTime();

export default {
  'Most recent': item => -getTimeStamp(item.registrationStartDate),
  'Time to register': item => getTimeStamp(item.registrationEndDate || item.submissionEndDate),
  'Time to submit': item => item.submissionEndTimestamp,
  'Phase end time': item => item.currentPhaseRemainingTime,
  '# of registrants': item => -item.numRegistrants,
  '# of submissions': item => -item.numSubmissions,
  'Prize high to low': item => -item.totalPrize,
  'Title A-Z': item => item.name,
  'Current phase': item => item.status,
};
