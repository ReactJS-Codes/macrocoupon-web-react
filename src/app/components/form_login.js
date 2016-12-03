import React from 'react';
import { Component } from  'react';
import { Button } from 'react-bootstrap';

class FormLogin {
  constructor() {

  }
  render(){
    return(
        <div>
            <form name="f">
              <table>
                <tr>
                  <td>Username</td>
                  <td><input type="text" placeholder="Username" /></td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td><input type="text" placeholder="Password" /></td>
                </tr>
                <tr>
                  <td><input type="button" value="Submit"/></td>
                </tr>
              </table>
            </form>
        </div>
    );
  }
}
