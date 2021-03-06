/**
 * Copyright (c) INOVUA SOFTWARE TECHNOLOGIES.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import NumericInput from '../packages/NumericInput';

export default props => {
  return (
    <div
      className={
        'InovuaReactDataGrid__cell__editor InovuaReactDataGrid__cell__editor--number'
      }
    >
      <NumericInput
        autoFocus={props.autoFocus}
        defaultValue={props.value}
        onChange={props.onChange}
        theme={props.theme}
        style={{
          minWidth: Math.max(0, props.cellProps.computedWidth - 30),
        }}
        onBlur={props.onComplete}
        onKeyDown={e => {
          if (e.key === 'Escape') {
            props.onCancel(e);
          }
          if (e.key === 'Enter') {
            props.onComplete(e);
          }
          if (e.key == 'Tab') {
            props.onTabNavigation(true, e.shiftKey ? -1 : 1);
          }
        }}
      />
    </div>
  );
};
