import React, { SFC, useState } from "react";
import { css, cx } from "emotion";
import { MesonForm } from "meson-form";
import { IMesonFieldItem, EMesonFieldType } from "../../src/model/types";
import DataPreview from "kits/data-preview";
import { row } from "@jimengio/shared-utils";
import SourceLink from "kits/source-link";

let formItems: IMesonFieldItem[] = [{ type: EMesonFieldType.Input, required: true, label: "名称", name: "name" }];

let ValidationPage: SFC<{}> = (props) => {
  let [form, setForm] = useState({});

  return (
    <div className={cx(row, styleContainer)}>
      <MesonForm
        initialValue={{}}
        items={formItems}
        onSubmit={(form) => {
          setForm(form);
        }}
        submitOnEdit
      />

      <div>
        <SourceLink fileName={"validation.tsx"} />
        <DataPreview data={form} />
      </div>
    </div>
  );
};

export default ValidationPage;

let styleContainer = css``;