import { usePage } from "@inertiajs/react";
import Sidebar from "../../Layouts/Sidebar";

import { Field, Fieldset, Input, Label, Legend, Select, Textarea } from '@headlessui/react'


function Account() {
    const { user } = usePage().props;
    return (
        <>
            <div className="">
                <Fieldset className="flex flex-col w-full p-10">
                    <Legend className="pl-8 pt-5 font-bebas text-6xl">
                        User Settings
                    </Legend>

                    <div className="pl-8 pt-5 font-bebas text-4xl">
                        Personal Information
                    </div>

                    <div className="flex">
                        <Field className="flex p-10">
                            <Label className="block w-20">First Name:</Label>
                            <Input className="ml-3 block border rounded pl-3" name="Name" value={user.FirstName} />
                        </Field>
                        <Field className="flex p-10">
                            <Label className="block w-20">Last Name:</Label>
                            <Input className="ml-3 block border rounded pl-3" name="Name" value={user.LastName} />
                        </Field>

                    </div>

                    <div className="flex">
                        <Field className="flex p-10">
                            <Label className="block w-20">Birthdate:</Label>
                            <Input type="date" className="ml-3 block border rounded pl-3 w-full" name="Name" value={user.BirthDate.split(' ')[0]} />
                        </Field>
                        <Field className="flex p-10">
                            <Label className="block w-20">Hiredate:</Label>
                            <Input type="date" className="ml-3 block border rounded pl-3 w-full" name="Name" value={user.HireDate.split(' ')[0]} />
                        </Field>
                    </div>

                    <div className="pl-8 pt-5 font-bebas text-4xl">
                        Contact
                    </div>
                    <Field className="flex p-10 ">
                        <Label className="block w-20">Email:</Label>
                        <Input className="ml-3 block border rounded pl-3 w-full" name="Name" value={user.email} />
                    </Field>
                    <div className="flex">
                        <Field className="flex p-10 ">
                            <Label className="block w-20">Phone:</Label>
                            <Input className="ml-3 block border rounded pl-3 w-full" name="Name" value={user.Phone} />
                        </Field>
                        <Field className="flex p-10 ">
                            <Label className="block w-20">Fax:</Label>
                            <Input className="ml-3 block border rounded pl-3 w-full" name="Name" value={user.Fax} />
                        </Field>
                    </div>


                    <div className="pl-8 pt-5 font-bebas text-4xl">
                        Address
                    </div>
                    <Field className="flex p-10 ">
                        <Label className="block w-20">Address:</Label>
                        <Input className="ml-3 block border rounded pl-3 w-full" name="Name" value={user.FirstName} />
                    </Field>
                    <div className="flex">
                        <Field className="flex p-10">
                            <Label className="block w-20">City:</Label>
                            <Input className="ml-3 block border rounded pl-3" name="Name" value={user.LastName} />
                        </Field>
                        <Field className="flex p-10">
                            <Label className="block w-20">State:</Label>
                            <Input className="ml-3 block border rounded pl-3" name="Name" value={user.LastName} />
                        </Field>

                    </div>
                    <div className="flex">
                        <Field className="flex p-10">
                            <Label className="block w-20">Country:</Label>
                            <Input className="ml-3 block border rounded pl-3" name="Name" value={user.LastName} />
                        </Field>
                        <Field className="flex p-10">
                            <Label className="block w-25">Postal Code:</Label>
                            <Input className="ml-3 block border rounded pl-3" name="Name" value={user.LastName} />
                        </Field>
                    </div>
                    <div className="flex justify-center">
                        <button className="w-35 rounded-2xl border bg-[#DBBEA1]/50 border-[#DBBEA1]  text-xl" type="submit"> Submit </button>
                    </div>

                </Fieldset>

            </div>
        </>
    )
}

Account.layout = page => <Sidebar>{page}</Sidebar>;

export default Account;