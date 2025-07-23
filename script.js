//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");
const errorDiv = document.getElementById("error")
const loading = document.getElementById("loading")
const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
const loadImages = (img)=>{
	return new Promise((resolve,reject)=>{
	const image = new Image();
	image.src = img;
	image.onload = () => resolve(image);
	image.onerror = () => reject(`Failed to load Images ${img}`)
	})
}
const handleClick = () => {
	loading.innerHTML = "Loading..."
	const promises = images.map((image)=>loadImages(image.url))

	
Promise.all(promises).then((data)=>{
	loading.style.display = "none";
	data.forEach((img)=>{
	output.appendChild(img);
	})
}).catch((error)=>{
	loading.style.display = "none";
	errorDiv.innerHTML = error;
})
}

btn.onclick= handleClick;