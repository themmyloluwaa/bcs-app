import React from "react";
import { Dimensions, ScrollView } from "react-native";
import HTML from "react-native-render-html";

import HeaderComponent from "../components/general/HeaderComponent";

const htmlContent = `
<p>a).</p>
<p>This question requires us to evaluate S = a<sub>0</sub> x b<sub>0</sub> + a<sub>1</sub> x b<sub>1</sub> + &hellip; + a<sub>n-1</sub> x b<sub>n-1</sub></p>
<p><span style="font-size: 10pt;">S = 0 //clear the sum </span></p>
<p><span style="font-size: 10pt;">FOR I = 0 to n-1 </span></p>
<p><span style="font-size: 10pt;">S = S + ai x bi </span></p>
<p><span style="font-size: 10pt;">END_FOR</span></p>
<p>A simple assembly language, explaining each operation.</p>
<p><span style="font-size: 10pt;">MOV r0,#0 //register r0 is S. Store 0 in it (i.e., clear S). # indicates a literal value </span></p>
<p><span style="font-size: 10pt;">MOV r1,#A //register r1 is loaded with address of A (i.e., r1 is a pointer to A) </span></p>
<p><span style="font-size: 10pt;">MOV r2,#B //register r2 is loaded with address of B (i.e., r2 is a pointer to B) </span></p>
<p><span style="font-size: 10pt;">MOV r3,#n //register r3 is n. Load it with the number of elements to count </span></p>
<p><span style="font-size: 10pt;">Loop MOV r4,[r1] //copy element pointed at by r1 into r4 (get ai) </span></p>
<p><span style="font-size: 10pt;">MOV r5,[r2] //copy element pointed at by r2 into r5 (get bi) </span></p>
<p><span style="font-size: 10pt;">MUL r6,r4,r5 //put a1 x b1 in r6 </span></p>
<p><span style="font-size: 10pt;">ADD r0,r0,r6 //Add r6 to r0; that is, update the sum by adding the new product </span></p>
<p><span style="font-size: 10pt;">ADD r1,r1,#1 //Point to the next element in A </span></p>
<p><span style="font-size: 10pt;">ADD r2,r2,#1 //Point to the next element in B</span></p>
<p><span style="font-size: 10pt;"> SUB r3,r3,#1 //Subtract 1 from the loop counter </span></p>
<p><span style="font-size: 10pt;">BNE Loop //Branch on not zero to Loop</span></p>
<p>&nbsp;</p>
<p><span style="font-size: 12pt;">b).</span></p>
<p><span style="font-size: 12pt;">This question asks for <strong>two</strong> advances in computer architecture. Note the question is concerned with architecture and not hardware. Advances due to improvements in manufacturing such as faster clocks and better semiconductor technology will gain few marks. However, if new hardware is related to architecture, then the answer is acceptable (e.g., a faster clock is not what is being asked for, but cache memory and multicore processing is).</span></p>
<p><span style="font-size: 12pt;">Changes in computer architecture include wider registers and memory allowing operations on 64-bit words (8-bit processors can also operate on 64-bit words, but they have to process 8 bits at a time). Some modern architectures increase the number of registers which reduces the number of accesses required to relatively slow DRAM.</span></p>
<p><span style="font-size: 12pt;">Special instruction sets have been introduced to facilitate operations on data representing video and image processing. These were originally called multimedia instructions (or MMX extensions). Such instruction deals with special-purpose applications such as video or data encoding.</span></p>
<p><span style="font-size: 12pt;">At the structural level (i.e., processor organization) one of the main advances has been pipelining &ndash; instructions are executed in a series of stages. As soon as an instruction finishes the first step in its execution, it is passed to the next stage of processing, and the next instruction fetched. At any instant 4 to over 30 instructions may be in the pipeline in different stages of processing. Pipelining increases performance without requiring faster technology.</span></p>
<p><span style="font-size: 12pt;">Superscalar processing is another technique that improves performance without requiring faster hardware. Superscalar processors have multiple processing units. A group of instructions are fetched into buffers and are executed in parallel (however, logic is necessary to prevent one instruction from being executed before another if that instruction needs the result of an earlier instruction). Some computers even implement out-of-order processing in which the strict order of sequential processing is abandoned. </span></p>
<p><span style="font-size: 12pt;">Limitations in-memory speed are dealt with in several ways. In particular, cache memory brings instructions and data into very fast memory. The underlying principle is that for 80% of the time only 20% of the instructions are being used.</span></p>
<p><span style="font-size: 12pt;">Cache systems can be speeded up by using prefetching instructions and logic to bring instructions into the processor ahead of their use. This means that an instruction is in place in the processor as soon as its execution begins &ndash; cache memory, instruction prefetching, out-of-order execution.</span></p>
<p><span style="font-size: 12pt;">Over the last decade, the clock speed of computers appears to have reached a limit. This is imposed by the need to cool chips. Modern microprocessors dissipate up to 150 W is a small package. Higher clock speeds are not possible without radical changes in packaging technology. In order to overcome the limit on the clock rate, manufacturers have resorted to multicore processing; that is, replicating the CPU so that a processor package may have four or more CPUs operating in parallel (often with a shared cache memory). However, multicore processors are effective only when a task can be shared between processors.</span></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
`;

const { height, width } = Dimensions.get("window");
const PastQuestionAnswer = ({ navigation }) => {
  return (
    <>
      <HeaderComponent
        navigation={navigation}
        text="Past Answer"
        route="Question Forum"
        show={true}
      />

      <ScrollView
        style={{ flex: 1, height: height - 66, paddingHorizontal: 20 }}
      >
        <HTML html={htmlContent} imagesMaxWidth={width} />
      </ScrollView>
    </>
  );
};

export default PastQuestionAnswer;
