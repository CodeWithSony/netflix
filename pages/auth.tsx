import Image from "next/image";
import Input from "@/components/Input";
import { useCallback, useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Auth() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant == "login" ? "Register" : "login"
    );
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div className="relative netflix-bg h-full w-full bg-[url('/images/netbg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="">
          <img
            src="/images/logo.jpg"
            alt="netflix"
            width={100}
            height={100}
            className="bg-white"
          />
        </nav>
        <div className="flex justify-center ">
          <div className="bg-black  px-16 py-16 self self-center mt-2 lg:w-2/5 lg:max-md bg-opacity-70">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {" "}
              {variant == "login" ? "Sign in" : "Register"}{" "}
            </h2>
            <div className="flex flex-col gap-4  ">
              {variant == "Register" && (
                <Input
                  label="username"
                  onChange={(ev: any) => {
                    setName(ev.target.value);
                  }}
                  id="name"
                  type="text"
                  value={name}
                />
              )}
              <Input
                label="email"
                onChange={(ev: any) => {
                  setEmail(ev.target.value);
                }}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="password"
                onChange={(ev: any) => {
                  setPassword(ev.target.value);
                }}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button
              onClick={variant == "login" ? login : register}
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 focus:bg-red-700 transition"
            >
              {variant == "login" ? "Login" : "Sign up"}
            </button>
            <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <FcGoogle size={30} />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <FaGithub size={30} />
              </div>
            </div>
            <p className="text-neutral-500 mt-12 ">
              {variant == "login"
                ? "First time using Netflix?"
                : "already have an account"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover: underline cursor-pointer"
              >
                {variant == "login" ? "create and account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
