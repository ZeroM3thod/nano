"use client"; import {useEffect} from "react"; export function ServiceWorkerRegistration(){useEffect(()=>{navigator.serviceWorker?.register("/sw.js").catch(()=>{});},[]);return null}
