"use client";

import TabPanel, { a11yProps } from '@/components/TabPanel';
import { Box, Tab, Tabs } from '@mui/material';
import hljs from 'highlight.js';
import "highlight.js/styles/github-dark.css";
import { FC, useEffect, useState } from 'react';

const CustomTab = ({ type = 'javascript', children, ...props }: any) => {
    return (
        <TabPanel {...props}>
            <pre className='max-h-[300px] h-[300px] overflow-y-auto'>
                <code className={`font-mono language-${type}`}>{children}</code>
            </pre>
        </TabPanel>
    );
};

const Examples: FC = () => {
    const [value, setValue] = useState(0);

    useEffect(() => hljs.highlightAll());

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-3 md:px-[10%] mb-5'>
            <div>
                <h2 className='text-3xl md:text-4xl font-light'>Examples</h2>
                <br />
                <p>Here are a few examples of the BlazeScript scripting language.</p>
            </div>
            <div>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Hello world" {...a11yProps(0)} />
                        <Tab label="Conditional Statements" {...a11yProps(1)} />
                        <Tab label="Loops" {...a11yProps(2)} />
                        <Tab label="Functions" {...a11yProps(3)} />
                    </Tabs>
                </Box>

                <CustomTab value={value} index={0}>{`println("Hello world!");`}</CustomTab>
                <CustomTab value={value} index={1}>{`const name = read("What is your name? ");\n\nif (name === "root") {\n    println("Welcome back, root!");\n}\nelse {\n    println("Unknown user!");\n}`}</CustomTab>
                <CustomTab value={value} index={2}>{`/* For loop */\nfor (var i = 0; i < 5; i++) {\n    println("i is " + i);\n}\n\n/* Similar example with while loop */\nvar i = 0;\n\nwhile (i < 5) {\n    println("i is " + i);\n}\n\n/* Similar example with BlazeScript's special loop statements */\nloop 5 as i {\n    println("i is " + i);\n}`}</CustomTab>
                <CustomTab value={value} index={3}>{`function myFunc(a, b) {\n    return a + b;\n}\n\nprintln(myFunc(1, 2)); // 3`}</CustomTab>
            </div>
        </div>
    );
};

export default Examples;
