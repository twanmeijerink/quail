describe('assessment: whiteSpaceNotUsedForFormatting', function () {
  var client, assessments, quailResults, cases;

  // Evaluate the test page with Quail.
  before('load webdrivers and run evaluations with Quail', function () {
    return quailTestRunner.setup({
        url: 'http://localhost:9999/whiteSpaceNotUsedForFormatting/whiteSpaceNotUsedForFormatting.html',
        assessments: [
          'whiteSpaceNotUsedForFormatting'
        ]
      })
      .spread(function (_client_, _assessments_, _quailResults_) {
        client = _client_;
        assessments = _assessments_;
        quailResults = _quailResults_;
      });
  });

  after('end the webdriver session', function () {
    return quailTestRunner.teardown(client);
  });

  it('should return the correct number of tests', function () {
    expect(quailResults.stats.tests).to.equal(1);
  });
  it('should return the correct number of cases', function () {
    expect(quailResults.stats.cases).to.equal(2);
  });

  it('should have correct key under the test results', function () {
    expect(quailResults.tests).to.include.keys('whiteSpaceNotUsedForFormatting');
  });

  it('should return the proper assessment for assert-1', function () {
    cases = quailResults.tests.whiteSpaceNotUsedForFormatting.cases;
    expect(cases).quailGetById('assert-1').to.have.quailStatus('passed');
  });
  it('should return the proper assessment for assert-2', function () {
    cases = quailResults.tests.whiteSpaceNotUsedForFormatting.cases;
    expect(cases).quailGetById('assert-2').to.have.quailStatus('failed');
  });
});
