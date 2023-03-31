// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: colton
// Created on: march 2023
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  const income = parseInt(document.getElementById('income').value)
  const hours = parseInt(document.getElementById('hour').value)

  // process
  const pay = (hours * income)*(1.00 - 0.18)
  const taxes = (hours * income) * 0.18

  // output
  document.getElementById('yourincome').innerHTML = 'you get: ' +'$'  + pay 
  document.getElementById('answer').innerHTML = 'the taxes take: ' + '$' + taxes 
}