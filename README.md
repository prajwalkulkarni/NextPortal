# Welcome to StackEdit!

# NextPortal

  

[![](https://img.shields.io/badge/npm-v1.0.0-blue)]()&nbsp;[![NextJS](https://img.shields.io/badge/-NextJS-%23000)](nextjs.org)&nbsp;[](https://github.com/prajwalkulkarni/NextPortal/issues)![GitHub issues](https://img.shields.io/github/issues/prajwalkulkarni/NextPortal)&nbsp;[![](https://img.shields.io/badge/license-BSD--3-lightgrey)]()


<b>NextPortal</b> is a lightweight and easy-to-use portal component for NextJS.
The absense of `index.js` in NextJS makes it cumbersome to setup a react portal. Since, NextJS follows SSG and SSR, it is also important to ensure that portals are created and dealt only on the client-side. And, if you somehow manage to configure this, there is this issue of applying transitions on the created/removed portal correctly. Keeping these problems in mind, NextPortal was created to exactly address these issues and setup a portal on the go.

##

## Installation
NextPortal can currently be installed only using `npm`. Soon, the support will be extended to `yarn` as well.

```
npm install --save @nextportal 
```

## Usage

<table>
<thead>
<th>Prop</th>
<th>type</th>
<th>Default value</th>
<th>Mandatory</th>
<th>Description</th>
</thead>
<tbody>
<tr>
<td>show</td>
<td>boolean</td>
<td>None</td>
<td>Yes</td>
<td>Renders the portal when true.</td>
</tr>
<tr>
<td>delay</td>
<td>number</td>
<td>1000</td>
<td>No</td>
<td>Duration in milliseconds after which the component unmounts, defaults to 1000ms.</td>
</tr>
<tr>
<td>
onClick
</td>
<td>function</td>
<td>None</td>
<td>No</td>
<td>Callback function to toggle visibility state of the portal.</td>
</tr> 
<tr>
<td>easeIn</td>
<td>boolean</td>
<td>None</td>
<td>No</td>
<td>Applies ease-in transition, whilst mounting/unmounting. Default transition is "ease" if no transition type is supplied.</td>
</tr>
<tr>
<td>easeOut</td>
<td>boolean</td>
<td>None</td>
<td>No</td>
<td>Applies ease-out transition, whilst mounting/unmounting.Default transition is "ease" if no transition type is supplied.</td>
</tr>
<td>easeInOut</td>
<td>boolean</td>
<td>None</td>
<td>No</td>
<td>Applies ease-in-out transition, whilst mounting/unmounting.Default transition is "ease" if no transition type is supplied.</td>
</tr>
<tr>
<td>position</td>
<td>boolean</td>
<td>None</td>
<td>No</td>
<td>Allows you to have fine-grain control over positioning your element anywhere relative to the viewport. Needs some mandatory styling rules to be added. Check use-case section for more.
</td>
</tr>
</tbody>
</table>

