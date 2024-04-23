"use client";

import {useRouter} from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";

export default function Login() {
  const router = useRouter();
  router.replace('/i/flow/login');
  return (
    <Main/>
  );
}

// router.push
// localhost:3001 -> localhost:3001/login -> localhost:3001/i/flow/login -> localhost:3001/login -> localhost:3001/i/flow/login
// 뒤로가기시 이전 페이지로 이동

// router.replace
// localhost:3001 -> localhost:3001/login -> localhost:3001/i/flow/login  (뒤로가기)-> localhost:3001 
 // 뒤로가기시 localhost:3001으로 이동