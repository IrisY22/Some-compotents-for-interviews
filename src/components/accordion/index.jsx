import React, { useState } from "react";
import data from "./data";
import "./styles.css";
export function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(currDataId) {
    setSelected(currDataId === selected ? null : currDataId);
  }

  function handleMultiSelection(currDataId) {
    let copyMultiple = [...multiple];
    const findCurrIdIndex = copyMultiple.indexOf(currDataId);
    if (findCurrIdIndex === -1) copyMultiple.push(currDataId);
    else {
      copyMultiple.splice(findCurrIdIndex, 1);
    }

    setMultiple(copyMultiple);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>
        Enable multi-selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="dataItem" key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelect
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found...</div>
        )}
      </div>
    </div>
  );
}
