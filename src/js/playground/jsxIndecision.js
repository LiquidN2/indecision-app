// const appRoot = document.getElementById('app');
//
// const app = {
//   title: 'Indecision App',
//   subtitle: 'Put your life in the hands of a computer',
//   options: [],
//   result: ''
// };
//
// const onFormSubmit = e => {
//   e.preventDefault();
//
//   const option = e.target.elements['option'].value;
//   if (!option) return;
//
//   app.options.push(option);
//   e.target.elements['option'].value = '';
//   renderApp();
// };
//
// const onRemoveAllClick = e => {
//   app.options = [];
//   renderApp();
// };
//
// const onGetDecision = () => {
//   const optionIndex = Math.floor(Math.random() * app.options.length);
//   app.result = app.options[optionIndex]
//   alert(app.result);
// };
//
// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//
//       {app.title && <p>{app.subtitle}</p>}
//
//       <p>
//         {app.options.length > 0
//           ? 'Here are your options:'
//           : 'No options available'}
//       </p>
//
//       {app.options.length > 0 && (
//         <button onClick={onGetDecision}>What should i do?</button>
//       )}
//
//       {app.options.length > 0 && (
//         <button onClick={onRemoveAllClick}>Remove all options</button>
//       )}
//
//       {app.options.length > 0 ? (
//         <ol>
//           {app.options.map((option, index) => (
//             <li key={index}>{option}</li>
//           ))}
//         </ol>
//       ) : null}
//
//       <form onSubmit={onFormSubmit}>
//         <input type="text" name="option" />
//         <button>Add Option</button>
//       </form>
//     </div>
//   );
//
//   ReactDOM.render(template, appRoot);
// };
//
// renderApp();
