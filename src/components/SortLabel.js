/*
 * @flow
 */

import React from 'react';

const NBSP = '\u00A0';

type Direction = 'ASC' | 'DESC';

export type SortProps = {
  field: string,
  direction: Direction,
};

export type SortType = 'alpha' | 'order' | 'size';

type Props = {
  field: string,
  fieldType: ?SortType,
  sort: SortProps,
  children?: string | React$Element<any>,
};

function getSortIconClass(direction: Direction, type: ?SortType) {
  switch(type) {
    case 'alpha':
      return direction === 'ASC'
        ? 'glyphicon glyphicon-sort-by-alphabet'
        : 'glyphicon glyphicon-sort-by-alphabet-alt'

    case 'order':
      return direction === 'ASC'
        ? 'glyphicon glyphicon-sort-by-order'
        : 'glyphicon glyphicon-sort-by-order-alt'
    case 'size':
    default:
      return direction === 'ASC'
        ? 'glyphicon glyphicon-sort-by-attributes'
        : 'glyphicon glyphicon-sort-by-attributes-alt'
  }
}

export default function SortLabel(props: Props) {
  const isSameField = props.sort.field === props.field;

  return (
    <span>
      {isSameField
        ? <span
            aria-hidden="true"
            className={getSortIconClass(props.sort.direction, props.fieldType)}
          />
        : null}
      {isSameField ? NBSP : null}
      {props.children}
    </span>
  );
}
