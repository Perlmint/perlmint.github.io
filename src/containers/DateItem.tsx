import React from 'react';

import { padStart } from 'lodash';

export default function DateItem(props: { date?: string}) {
    if (props.date === undefined) {
        return <span></span>;
    }
    const date = new Date(props.date);
    return <span>{date.getFullYear()}-{padStart((date.getMonth() + 1).toString(10), 2, '0')}</span>;
}
