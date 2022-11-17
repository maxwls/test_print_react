import React from "react";
import OSPPrintDesigner from "./report_package/osp-print-designer-core";
import "./report_package/osp-print-designer-core/css/osp.designer.css";
import "./report_package/osp-print-viewer-core/css/osp.viewer.css";
import $ from "jquery";
export default class Designer extends React.Component {
  constructor(props) {
    super(props);
    this.options = null;
    this.designer = null;
    this.report = null;
  }
  componentWillUnmount() {
    this.designer.dispatch();
}
  componentDidMount() {
    OSPPrintDesigner.Base.StiLicense.key =
      "6vJhGtLLLz2GNviWmUTrhSqnOItdDwjBylQzQcAOiHkeCyu4tQ/fHMz14+aX8heK5fPWPOh9GhOJWHXzBWfWkku5KP" +
      "ChSipMnMVPpqTvfJS7sIxjF/cxhVrUvULFfcxcaCxjU9i6mZsEDM7BO+haAK3b38ycQVY0MQLANLSx5MZDk64iZY3P" +
      "Tch8l8h+G4eHK2bcztaqjQsdfficwLSgadjyB/6byFWPUQGIUZIicm7hdluCKxvRMJ9LksBxlgcJSnXQYm5RJxoibg" +
      "yH5H5tzHyms+PF3ePcgpoXlcRotDn6IyefrvWPGiKKcia/HRIsoXRM8lDeOueiFgQ29UyMwGQ2In/3iwD9vdZ9ag1A" +
      "wsjwO/i95q9QMe5Vl8qh7DaGaICQUN41fCgSX2UcS9wNzX8pu1/YUfQ0Nr3ZrE2GTnLDWiBBMGxCbmTmny0xJRMmIJ" +
      "zSO0o//fqTfSKvGTZqquNLg4+YrXxUWDMos04Xka1BO4DkZVnN33tUwINu44cuzUrRVXe/BvmphpnEEskGGbmtT86z" +
      "GSdRjirhJWqtsV4PaPlsFATWMafoe3/+EA1a";

    OSPPrintDesigner.Base.Localization.StiLocalization.addLocalizationFile(
      "./Localization/zh_CN.xml",
      false,
      "zh_CN"
    );
    OSPPrintDesigner.Base.Localization.StiLocalization.cultureName = "zh_CN";

    // this.report = new OSPPrintDesigner.Report.StiReport();
    let options = new OSPPrintDesigner.Designer.StiDesignerOptions();
    options.ospData = {
      jQuery: $,
      isActive : function(){return false}
    };
    options.height = "880px";
    options.appearance.showReportTree = true;
    options.appearance.showTooltips = true;
    options.appearance.showTooltipsHelp = false;
    options.appearance.allowChangeWindowTitle = true;
    options.appearance.showPropertiesGrid = true;
    options.appearance.showSaveDialog = false;
    options.appearance.allowChangeWindowTitle = false;
    options.appearance.showLocalization = false;
    options.toolbar.showFileMenu = true;
    options.toolbar.showSetupToolboxButton = true;
    options.toolbar.showFileMenuSaveAs = true;
    options.toolbar.showFileMenuAbout = false;

    options.bands.showTable = true;
    options.components.showPanel = true;

    this.designer = new OSPPrintDesigner.Designer.StiDesigner(
      options,
      "StiDesigner" + Date.now(),
      false
    );

    this.designer.report = new OSPPrintDesigner.Report.StiReport();
    this.designer.renderHtml(this.props.id);
  }
  render() {
    return <div id={this.props.id}></div>;
  }
}
