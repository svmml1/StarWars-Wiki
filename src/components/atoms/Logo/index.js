import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import logoImage from '../../../../assets/p1.png'
import {LogoImage } from './styles'

export function Logo() {
    return (
        <LogoImage source={logoImage} />
    )
}