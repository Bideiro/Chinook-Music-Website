

import { Form, useForm, usePage } from "@inertiajs/react";
import Footer from "../Layouts/Footer";
import Navbar from "../Layouts/Navbar";

import { Button, Field, Fieldset, Input, Label, Legend, Select, Textarea } from '@headlessui/react'


import React, { useState } from 'react';

import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid";

export default function Login() {

    const { errors } = usePage().props;

    return (

        <>
            <div className="min-w-screen min-h-screen flex justify-center items-center">
                <Form action="/login" method="post">

                    <Fieldset className=" max-w-250 w-100 ring-2 rounded-4xl ring-[#DBBEA1]/50"
                    >
                        <Legend className=" relative w-full bg-[#DBBEA1] p-5 rounded-t-4xl text-2lg font-montserrat font-bold text-center">
                            <Button
                                className="absolute flex -top-1 left-4 translate-y-1/2 text-md font-medium hover:underline"
                                onClick={(e) => { window.history.back(); }}
                            >
                                <ArrowUturnLeftIcon className="h-5 w-5" />
                                <div className="pl-1">
                                    Back
                                </div>
                            </Button>

                            LOGIN
                        </Legend>

                        <div className="grid grid-cols-1 grid-rows-3 gap-8 p-8 place-items-center w-full">
                            <Field>
                                <Label className="block font-montserrat font-semibold" >Email:</Label>
                                <Input className="w-full mt-1 block border-2 border-[#DBBEA1] rounded-2xl"
                                    name="email" autoFocus
                                />
                                {errors.email && (
                                    <div className="text-red-600 text-sm mt-1">{errors.email}</div>
                                )}
                            </Field>
                            <Field>
                                <Label className="block font-montserrat font-semibold">Password:</Label>
                                <Input className="w-full mt-1 block border-2 border-[#DBBEA1]  rounded-2xl"
                                    name="password"
                                />
                            </Field>
                            <Button className="w-full max-w-25 h-full max-h-10 rounded-2xl bg-[#DBBEA1]/65 hover:bg-[#DBBEA1] ring-[#DBBEA1] ring-2"
                                type="submit"
                            >
                                Login
                            </Button>
                        </div>

                    </Fieldset>

                </Form>
            </div>

        </>
    )
}

