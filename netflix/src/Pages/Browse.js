import React from 'react'
import { BrowseContainer } from '../Containers/Browse';
import { useContent } from '../Hooks';
import  selectionFilter from '../Utils/SelectionFilter';
export default function Browse() {
    // we need the series and the films
    const { series } = useContent('series');
    const { films } = useContent('films');
    const slides = selectionFilter({ series, films });

    // we need slides
    // pass it to the browse container
    return (
        <BrowseContainer slides= {slides} />
    )
}
