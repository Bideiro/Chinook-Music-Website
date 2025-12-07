import Footer from "../Layouts/Footer"
import Navbar from "../Layouts/Navbar"

import { Field, Fieldset, Input, Label, Legend, Select, Textarea } from '@headlessui/react'


function Order() {

    return (
        <>
            <div className="p-10">

                <div>
                    <Fieldset className="grid grid-cols-2 grid-rows-3">
                        <Legend className=" bg-[#DBBEA1] rounded-t-full col-span-2 h-15 pl-8 pt-5 font-bebas text-3xl">
                            Your Info
                        </Legend>
                        <Field>
                            <Label className="block">Street address</Label>
                            <Input className="mt-1 block" name="address" />
                        </Field>

                    <Field>
                        <Label className="block">Country</Label>
                        <Select className="mt-1 block" name="country">
                            <option>Canada</option>
                            <option>Mexico</option>
                            <option>United States</option>
                        </Select>
                    </Field>
                    <Field>
                        <Label className="block">Delivery notes</Label>
                        <Textarea className="mt-1 block" name="notes" />
                    </Field>


                </Fieldset>

            </div>

        </div >
        </>
    )
}


Order.layout = page => (
    <>
        <Navbar />
        {page}
        <Footer />
    </>
);

export default Order;



