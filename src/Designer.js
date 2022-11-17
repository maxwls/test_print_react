import React from 'react';
// import { Stimulsoft } from 'stimulsoft-reports-js/Scripts/stimulsoft.blockly.editor';
import { Stimulsoft } from './report/osp.designer.src';
export default class Designer extends React.Component {
  constructor(props) {
    super(props);
    this.options = null;
    this.designer = null;
  }
  componentDidMount() {
    Stimulsoft.Base.StiLicense.key =
      '6vJhGtLLLz2GNviWmUTrhSqnOItdDwjBylQzQcAOiHkeCyu4tQ/fHMz14+aX8heK5fPWPOh9GhOJWHXzBWfWkku5KP' +
      'ChSipMnMVPpqTvfJS7sIxjF/cxhVrUvULFfcxcaCxjU9i6mZsEDM7BO+haAK3b38ycQVY0MQLANLSx5MZDk64iZY3P' +
      'Tch8l8h+G4eHK2bcztaqjQsdfficwLSgadjyB/6byFWPUQGIUZIicm7hdluCKxvRMJ9LksBxlgcJSnXQYm5RJxoibg' +
      'yH5H5tzHyms+PF3ePcgpoXlcRotDn6IyefrvWPGiKKcia/HRIsoXRM8lDeOueiFgQ29UyMwGQ2In/3iwD9vdZ9ag1A' +
      'wsjwO/i95q9QMe5Vl8qh7DaGaICQUN41fCgSX2UcS9wNzX8pu1/YUfQ0Nr3ZrE2GTnLDWiBBMGxCbmTmny0xJRMmIJ' +
      'zSO0o//fqTfSKvGTZqquNLg4+YrXxUWDMos04Xka1BO4DkZVnN33tUwINu44cuzUrRVXe/BvmphpnEEskGGbmtT86z' +
      'GSdRjirhJWqtsV4PaPlsFATWMafoe3/+EA1a';

    this.options = new Stimulsoft.Designer.StiDesignerOptions();
    this.options.appearance.fullScreenMode = false;

    this.designer = new Stimulsoft.Designer.StiDesigner(
      this.options,
      'StiDesigner' + Date.now(),
      false
    );

    this.designer.report = new Stimulsoft.Report.StiReport();

    console.log('Load report from url');
    // this.designer.report.loadFile('/reports/SimpleList.mrt');
    this.designer.renderHtml(this.props.id);
  }
  render() {
    return <div id={this.props.id}></div>;
  }
}
