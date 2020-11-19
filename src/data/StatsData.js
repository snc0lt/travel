import React from 'react'
import { GiEarthAmerica } from "react-icons/gi";
import { MdAirplanemodeActive, MdTimer } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa";

export const statData = [
  {
    title: 'Over 100 destinations',
    desc: 'Travel to over 100 unique places',
    icon: (<GiEarthAmerica css={`color: #047bf1`} />)
  },
  {
    title: '1 Million Trips Made',
    desc: 'Over 1 million trips completed last year',
    icon: (<MdAirplanemodeActive css={`color: #f3a828`} />)
  },
  {
    title: 'Fastest Support',
    desc: 'Access our support team 24/7',
    icon: (<MdTimer css={`color: #f34f2e`} />)
  },
  {
    title: 'Best Deals',
    desc: 'We offer the best prices',
    icon: (<FaMoneyCheck css={`color: #3af576`} />)
  },
]