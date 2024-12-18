"use client";

import Select from "react-select";
import React from "react";
import PanelCodeHighlight from "@/components/compose/PanelCodeHighlight";

const ComponentsFormsSelectBasic = () => {
  const options = [
    { value: "orange", label: "Orange" },
    { value: "white", label: "White" },
    { value: "purple", label: "Purple" },
  ];
  return (
    <PanelCodeHighlight
      title="Basic"
      codeHighlight={`import Select from 'react-select';

const options = [
    { value: 'orange', label: 'Orange' },
    { value: 'white', label: 'White' },
    { value: 'purple', label: 'Purple' },
];

<Select defaultValue={options[0]} options={options} isSearchable={false} />`}
    >
      <div className="mb-5">
        <Select
          defaultValue={options[0]}
          options={options}
          isSearchable={false}
        />
      </div>
    </PanelCodeHighlight>
  );
};

export default ComponentsFormsSelectBasic;
