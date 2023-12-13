import React from "react";

function TableFooter(props){
    return (
        <tfoot className="results-tfoot">
                        <tr className="tfoot-tr">

                            <td colSpan="9">
                                <div className="tfoot-dev">
                                    <p className="tfoot-p">Items per page:</p>
                                    <form className="foot-select-form">
                                        <select id="pages" className="search-inputs footer-options" name="pages">
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                            <option value="150">150</option>
                                        </select>
                                    </form>
                                    <p className="tfoot-p">1 - {props.data.length} from {props.data.length}</p>
                                    <div className="pagination-btns">
                                        <i className="tfoot-material-icons material-icons">first_page</i>
                                        <i className="tfoot-material-icons material-icons">navigate_next</i>
                                        <i className="tfoot-material-icons material-icons">navigate_before</i>
                                        <i className="tfoot-material-icons material-icons">last_page</i>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
    )
};

export default TableFooter;