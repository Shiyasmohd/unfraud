import { Button, Checkbox, Dropdown, FormElement, Input, Modal, Radio, Row, Text } from "@nextui-org/react";
import axios from "axios";
import { useMemo, useRef, useState } from "react";

export default function Predict(){

    const [outPatient,setOutPatient] = useState<string>('true')

    const [visible, setVisible] = useState(false);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    const [selected, setSelected] = useState(new Set(["Diseases"]));
    const selectedValue = useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );

    const policyNo = useRef<any>()
    const dob = useRef<any>()
    const claimAmount = useRef<any>()
    const annualAmount = useRef<any>()

    
      const handleSubmitDetails = () =>{

        
        var data = JSON.stringify({
            "amt1": 100,
            "disease": [
                "Cancer",
                "Stroke"
            ],
            "amt2": 100,
            "amt3": 0,
            "age": 30,
            "patin": 1,
            "nod": 2
        });

        var config = {
            method: 'post',
            url: 'https://f32d-117-230-83-134.in.ngrok.io/api/predict/',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
        
        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return(
        <div className=" w-[30%] h-[35vh] px-16 py-8 rounded-lg bg-[#171717] border-[#ffffff8a] border-[0.75px] flex flex-col justify-between  ">

            {/* Inner Content */}
            <h3 className="text-center text-xl font-mono">
                Predict Fraud
            </h3>
            <p className="mt-5 text-[#ffffff9a] text-center">
                Checks out whether the healthcare data claimed have detected any kind of fraudulence
            </p>
            <div className="w-full flex justify-center mt-6">
                <button 
                    onClick={()=>setVisible(true)}
                    className="bg-[#0072F5] w-[125px] py-1 rounded-md">
                    Predict
                </button>
            </div>

            {/* Popup Box */}
            <Modal closeButton blur aria-labelledby="modal-title" open={visible} onClose={closeHandler}>
                <Modal.Header>
                <Text id="modal-title" size={18}>
                    Predict 
                    <Text b size={18}>
                    &nbsp; Data
                    </Text>
                </Text>
                </Modal.Header>
                <Modal.Body>

                    <Input clearable bordered fullWidth color="primary" size="lg" label="Policy Number" ref={policyNo} />
                    <Input clearable bordered fullWidth color="primary" size="lg" type="date" placeholder="Date" label="DOB" ref={dob}  />
                    <Input clearable bordered fullWidth color="primary" size="lg" label="Insurance Claim Reimburse Amount" ref={claimAmount} />

                    <Radio.Group label="Out Patient" className="flex" value={outPatient} onChange={setOutPatient}  >
                        <Radio className="w-fit" value="true">
                            True
                        </Radio>
                        <Radio 
                            className="w-fit" 
                            css={{margin: "0 32px !important"}} 
                            value="false"
                        >
                            False
                        </Radio>
                    </Radio.Group>

                    {
                        outPatient == 'true' ?
                        <Input clearable bordered fullWidth color="primary" size="lg" type='number' ref={annualAmount} label="Out Patient Annual Reimburse Amount" />
                        : outPatient == 'false' ?
                        <Input clearable bordered fullWidth color="primary" size="lg" type='number' ref={annualAmount} label="In Patient Annual Reimburse Amount" />
                        : ""
                    }

                    <Dropdown >
                        <Dropdown.Button  flat className="bg-[#ffffff1a]" color="primary" css={{ tt: "capitalize" }}>
                            {selectedValue}
                        </Dropdown.Button>
                        <Dropdown.Menu
                            aria-label="Multiple selection actions"
                            color="secondary"
                            disallowEmptySelection
                            selectionMode="multiple"
                            selectedKeys={selected}
                            onSelectionChange={setSelected}
                        >
                            <Dropdown.Item key="Cancer">Cancer</Dropdown.Item>
                            <Dropdown.Item key="Alzheimer">Alzheimer</Dropdown.Item>
                            <Dropdown.Item key="Heart Faliure">Heart Faliure </Dropdown.Item>
                            <Dropdown.Item key="Kidney Disease">Kidney Disease</Dropdown.Item>
                            <Dropdown.Item key="Obstructive Pulmonary">Obstructive Pulmonary</Dropdown.Item>
                            <Dropdown.Item key="Depression">Depression</Dropdown.Item>
                            <Dropdown.Item key="Diabetes">Diabetes</Dropdown.Item>
                            <Dropdown.Item key="Stroke">Stroke</Dropdown.Item>
                            <Dropdown.Item key="Ischemic Heart Disease">Ischemic Heart Disease</Dropdown.Item>
                            <Dropdown.Item key="Osteoporosis">Osteoporosis</Dropdown.Item>
                            <Dropdown.Item key="Rheumatoid Arthritis">Rheumatoid Arthritis</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    

                
                </Modal.Body>
                <Modal.Footer>
                    <button className="bg-[#0072F5] px-6 py-2.5 rounded-md" onClick={handleSubmitDetails}>
                        Predict
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}