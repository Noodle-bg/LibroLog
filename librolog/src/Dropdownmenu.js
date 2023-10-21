import {Dropdown} from 'rsuite';
import {ButtonToolbar} from 'react-bootstrap';
import React from 'react';
function Dropdownmenu(){
    return(
        <div className='tool-bar'>
            <Dropdown title="About" trigger="hover" classname="tool">
                <Dropdown.Item className='tool-item' href="#">Item 1</Dropdown.Item >                
                <Dropdown.Item className='tool-item' href="#">Item 2</Dropdown.Item >
                <Dropdown.Item className='tool-item' href="#">Item 3</Dropdown.Item >
                <Dropdown.Item className='tool-item' href="#">Item 4</Dropdown.Item >
                <Dropdown.Item className='tool-item' href="#">Item 5</Dropdown.Item >
                <Dropdown.Item className='tool-item' href="#">Item 6</Dropdown.Item >
            </Dropdown>
            <Dropdown title="Community" trigger="hover" classname="tool">
                <Dropdown.Item className='tool-item'>Item 1</Dropdown.Item >                
                <Dropdown.Item className='tool-item'>Item 2</Dropdown.Item >
                <Dropdown.Item className='tool-item'>Item 3</Dropdown.Item >
                <Dropdown.Item className='tool-item'>Item 4</Dropdown.Item >
                <Dropdown.Item className='tool-item'>Item 5</Dropdown.Item >
                <Dropdown.Item className='tool-item'>Item 6</Dropdown.Item >
            </Dropdown>
            <Dropdown title="Fiction" trigger="hover" classname="tool">
                <Dropdown.Item className='tool-item'>Item 1</Dropdown.Item >                
                <Dropdown.Item className='tool-item'>Item 2</Dropdown.Item >
                <Dropdown.Item className='tool-item'>Item 3</Dropdown.Item >
                <Dropdown.Item className='tool-item'>Item 4</Dropdown.Item >
                <Dropdown.Item className='tool-item'>Item 5</Dropdown.Item >
                <Dropdown.Item className='tool-item'>Item 6</Dropdown.Item >
            </Dropdown>
            <Dropdown title="Non Fiction" trigger="hover" classname="tool">
                <Dropdown.Item className='tool-item'>Item 1</Dropdown.Item >                
                <Dropdown.Item className='tool-item'>Item 2</Dropdown.Item >
                <Dropdown.Item className='tool-item'>Item 3</Dropdown.Item >
                <Dropdown.Item className='tool-item'>Item 4</Dropdown.Item >
                <Dropdown.Item className='tool-item'>Item 5</Dropdown.Item >
                <Dropdown.Item className='tool-item'>Item 6</Dropdown.Item >
            </Dropdown>
            <Dropdown title="Collections" trigger="hover" classname="tool">
                <Dropdown.Item className='tool-item'>Item 1</Dropdown.Item >                
                <Dropdown.Item className='tool-item'>Item 2</Dropdown.Item >
                <Dropdown.Item className='tool-item'>Item 3</Dropdown.Item >
                <Dropdown.Item className='tool-item'>Item 4</Dropdown.Item >
                <Dropdown.Item className='tool-item'>Item 5</Dropdown.Item >
                <Dropdown.Item className='tool-item'>Item 6</Dropdown.Item >
            </Dropdown>
        </div>
    );
};
export default Dropdownmenu;