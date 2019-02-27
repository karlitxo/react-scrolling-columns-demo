import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Show from './getData';

function dateUTC(ts){
    let date= new Date(ts*1000);
    return date.toUTCString();
}

const Cell = ({show,title,subtitle,length,start,genre,showID,className}) => {
    return (<div key={`${start}${showID}`}  className="cell" >
                <hr />
                <p>{dateUTC(start)}</p>
                <p><b>{title}</b></p><p>{subtitle}</p>
                <p>{ `${length} min` }</p>
                <hr />
                </div>)
}

export default Cell;