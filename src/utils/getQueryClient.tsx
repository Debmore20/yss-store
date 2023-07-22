"use client"

import { QueryClient } from "@tanstack/react-query";
import {useState, cache} from 'react'

const [client] = useState(new QueryClient())

const getQueryClient = cache(()=> new QueryClient())

export default getQueryClient