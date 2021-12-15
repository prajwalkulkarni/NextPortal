# NextPortal

[![](https://img.shields.io/badge/npm-v1.0.0-blue)]()&nbsp;[![NextJS](https://img.shields.io/badge/-NextJS-%23000)](nextjs.org)&nbsp;[](https://github.com/prajwalkulkarni/NextPortal/issues)![GitHub issues](https://img.shields.io/github/issues/prajwalkulkarni/NextPortal)&nbsp;[![](https://img.shields.io/badge/license-BSD--3-lightgrey)]()


<b>NextPortal</b> is a lightweight and easy-to-use portal component for NextJS.
The absense of `index.js` in NextJS makes it cumbersome to setup a react portal. Since, NextJS follows SSG and SSR, it is also important to ensure that portals are created and dealt only on the client-side. And, if you somehow manage to configure this, there is this issue of applying transitions on the created/removed portal correctly. Keeping these problems in mind, NextPortal was created to address these issues and setup a portal on the go.



## Installation
NextPortal can currently be installed only using `npm`. Soon, the support will be extended to `yarn` as well.

```
npm install --save @nextportal 
```

## Usage

<b>NextPortal</b> is a component that wraps around your element, that can be further nested. Portals are often used to display a modal, that is rendered conditionally, although NextPortal extends this feature to render a default modal or an element that could be displayed anywhere on the screen.

Below are the props accecpted by the component:
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



NextPortal, under the hood makes use of native DOM functions and objects that are exclusive to the browser and cannot be parsed or executed on the server. For this reason, you'd have to import this component dynamically by setting `ssr:false`

`import dynamic from 'next/dynamic'`

```
const NextPortal = dynamic(()=>
{
	return import('nextportal/dist/NextPortal')
},
{ssr:false}
)
```
The package component is now ready to be used.
Check out the below use-cases to help you get started.

### Default Portal (Modal)
```
import  Head  from  'next/head'
import  dynamic  from  'next/dynamic'
import  React,{useState} from  'react'
import styles from '../styles/Home.module.css'


const  NextPortal = dynamic(
	() => {
		return  import("nextportal/dist/NextPortal");
	},
	{ ssr:  false }
);

export  default  function  Home() {
	const [portal,showPortal] = useState(false)
	const  showPortalHandler = () =>{
		showPortal(true)
	}
	
	const  hidePortalHandler = () =>{
		showPortal(false)
	}
	
	const  formElemet = <div  style={{display:'flex',
	justifyContent:'center',alignItems:'flex-start',
	flexDirection:'row',
	padding:'10px',
	boxShadow:'1px 2px 3px 2px #8b8b8b',
	backgroundColor:'greenyellow'}}>
		<div  style={{display:'flex',flexDirection:'column'}}>
			<h1>Title</h1>
			<input  type='text'  placeholder='Enter name'/>
			<button  onClick={hidePortalHandler}>Submit</button>
		</div>
	</div>

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta  name="description"  content="Generated by create next app"  />
				<link  rel="icon"  href="/favicon.ico"  />
			</Head>
		  
			<NextPortal  show={portal}  delay={2000}  onClick={hidePortalHandler}
			easeInOut>
				{formElemet}
			</NextPortal>

			<main  className={styles.main}>
				<h1  className={styles.title}>
					Welcome to <a  href="https://nextjs.org">Next.js!</a>
				</h1>
				<p>Show:{portal?"true":"false"}</p>
				<br/>
				<br/>
				<button  id="button"  onClick={showPortalHandler}>Open portal</button>
			</main>
		</div>
	)
}
```
Above is a bare NextJS project with a button that toggles the portal when clicked. Note that the `position` prop has not been set, meaning a default modal would pop up with the specified transition that is absolutely positioned.

### Positioned portal
You can alternatively position the portal element in any way you'd want to.
However, you'd have to add a few CSS rules to the enclosed element to get it working properly. Those are:
<ol type="1">
<li> position:fixed</li>
<li> pointerEvents:'auto'</li>
</ol>

Passing the `position` prop would make the overlay spread completely over the screen, thus giving the end user the freedom to have custom sized/positioned element. 
`position` could be best used when you want the portal to be a sidebar/navbar or a custom-sized modal positioned as per the developer's comfort.
The enclosed element should look something like this:
```
<div  style={{
	position:'fixed', // Custom positioning and sizing to look like a sidebar.
	pointerEvents:'auto',
	height:'100%',
	width:'20%',
	left:0,
	display:'flex',
	justifyContent:'center',
	alignItems:'flex-start',
	flexDirection:'row',
	padding:'10px',
	boxShadow:'1px 2px 3px 2px #8b8b8b',
	backgroundColor:'greenyellow'}}>
	.
	.
	.
	.
</div>
```

## Contribution
Contributions are always welcome.  If you've got any feature ideas or find a bug, kindly submit a PR with the description of the bug/feature addition and I shall review and get it fixed/added at the earliest with the incremented version.
The current version only supports NextJS projects setup with JavaScript, although it could be configured to work with TypeScript, but that'd require some boilerplate code. So adding the compatibility with TS is something nice to start with. The current version has limited transition styles, addtional transition styles can also be submitted as a contribution.
