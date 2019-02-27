import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// ChannelImage.propTypes = {
//   channelImage: string
// }

const ChannelImage = ({ channelImage }) => { return (<div className="channelImage"><img  className="img-responsive center-block" src={channelImage} /></div>); }

export default ChannelImage;