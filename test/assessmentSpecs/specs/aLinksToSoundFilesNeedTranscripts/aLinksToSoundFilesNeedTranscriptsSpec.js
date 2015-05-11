describe('assessment: aLinksToSoundFilesNeedTranscripts', function () {
  var client, assessments, quailResults, cases;

  describe('no links to media', function () {
    // Evaluate the test page with Quail.
    before('load webdrivers and run evaluations with Quail', function () {
      return quailTestRunner.setup({
          url: 'http://localhost:9999/aLinksToSoundFilesNeedTranscripts/aLinksToSoundFilesNeedTranscripts-inapplicable.html',
          assessments: [
            'aLinksToSoundFilesNeedTranscripts'
          ]
        })
        .spread(function (_client_, _assessments_, _quailResults_) {
          client = _client_;
          assessments = _assessments_;
          quailResults = _quailResults_;
          cases = quailResults.tests.aLinksToSoundFilesNeedTranscripts.cases;
        });
    });

    after('end the webdriver session', function () {
      return quailTestRunner.teardown(client);
    });

    it('should return the correct number of tests', function () {
      expect(quailResults.stats.tests).to.equal(1);
    });
    it('should return the correct number of cases', function () {
      expect(quailResults.stats.cases).to.equal(1);
    });

    it('should have correct key under the test results', function () {
      expect(quailResults.tests).to.include.keys('aLinksToSoundFilesNeedTranscripts');
    });

    it('should return the proper assessment for the test', function () {
      expect(cases[0]).to.have.quailStatus('inapplicable');
    });
  });

  describe('links to media', function () {
    // Evaluate the test page with Quail.
    before('load webdrivers and run evaluations with Quail', function () {
      return quailTestRunner.setup({
          url: 'http://localhost:9999/aLinksToSoundFilesNeedTranscripts/aLinksToSoundFilesNeedTranscripts.html',
          assessments: [
            'aLinksToSoundFilesNeedTranscripts'
          ]
        })
        .spread(function (_client_, _assessments_, _quailResults_) {
          client = _client_;
          assessments = _assessments_;
          quailResults = _quailResults_;
          cases = quailResults.tests.aLinksToSoundFilesNeedTranscripts.cases;
        });
    });

    after('end the webdriver session', function () {
      return quailTestRunner.teardown(client);
    });

    it('should return the correct number of tests', function () {
      expect(quailResults.stats.tests).to.equal(1);
    });
    it('should return the correct number of cases', function () {
      expect(quailResults.stats.cases).to.equal(10);
    });

    it('should have correct key under the test results', function () {
      expect(quailResults.tests).to.include.keys('aLinksToSoundFilesNeedTranscripts');
    });

    it('should return the proper assessment for assert-1', function () {
      expect(cases).quailGetById('assert-1').to.have.quailStatus('cantTell');
    });
    it('should return the proper assessment for assert-2', function () {
      expect(cases).quailGetById('assert-2').to.have.quailStatus('cantTell');
    });
    it('should return the proper assessment for assert-3', function () {
      expect(cases).quailGetById('assert-3').to.have.quailStatus('cantTell');
    });
    it('should return the proper assessment for assert-4', function () {
      expect(cases).quailGetById('assert-4').to.have.quailStatus('cantTell');
    });
    it('should return the proper assessment for assert-5', function () {
      expect(cases).quailGetById('assert-5').to.have.quailStatus('cantTell');
    });
    it('should return the proper assessment for assert-6', function () {
      expect(cases).quailGetById('assert-6').to.have.quailStatus('cantTell');
    });
    it('should return the proper assessment for assert-7', function () {
      expect(cases).quailGetById('assert-7').to.have.quailStatus('cantTell');
    });
    it('should return the proper assessment for assert-8', function () {
      expect(cases).quailGetById('assert-8').to.have.quailStatus('cantTell');
    });
    it('should return the proper assessment for assert-9', function () {
      expect(cases).quailGetById('assert-9').to.have.quailStatus('cantTell');
    });
    it('should return the proper assessment for assert-10', function () {
      expect(cases).quailGetById('assert-10').to.have.quailStatus('cantTell');
    });
  });
});