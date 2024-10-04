# How to install bootstrap 5 Components in your MAUI Blazor Application

For more information about **Bootstrap 5** components visit this URL: 

https://getbootstrap.com/docs/5.0/getting-started/introduction/

![image](https://github.com/user-attachments/assets/4709f4cb-6d66-457f-bfc7-e1f278e62fa5)

See information about the **Accordion** component in this URL: 

https://getbootstrap.com/docs/5.0/components/accordion/

See information about the **Navbar** component in this URL: 

https://getbootstrap.com/docs/5.0/components/navbar/

## 1. Run Visual Studio 2022 Community Edition and create a MAUI Blazor Application

We install and run Visual Studio 2022

We create a new project

![image](https://github.com/user-attachments/assets/9334a2bb-9ed5-4c40-a312-26973910975f)

We search for MAUI projects templates and select .NET MAUI Blazor App

![image](https://github.com/user-attachments/assets/8287f785-96b9-417b-b457-bf34560320e8)

We input the project name and the location in the hard disk

![image](https://github.com/user-attachments/assets/69d8e997-483d-47e8-a33e-70020aa1b027)

We select the .NET 9 framework and press the Create button

![image](https://github.com/user-attachments/assets/0d42e1ac-d7da-40d7-9798-8b51a8b279f5)



This is the original MAUI Blazor application folders and files structure



In this example we will include only two new files: **accordion.js** and **Accordion.razor**

![image](https://github.com/user-attachments/assets/777cb84e-2b9c-4d97-a8b6-c4a5ba0abcf7)


## 1. Modify the wwwroot/index.html file

Include a new line for the **bootstrap 5** style reference in the **wwwroot/index.html** head HTML element:

```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
```

Also include the **bootstrap 5** script in the **wwwroot/index.html** body HTML element:

```
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
```

This is the whole **wwwroot/index.html** code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
    <title>MauiAppBootstrap5</title>
    <base href="/" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/app.css" />
    <link rel="stylesheet" href="MauiAppBootstrap5.styles.css" />
    <link rel="icon" href="data:,">
</head>

<body>

    <div class="status-bar-safe-area"></div>

    <div id="app">Loading...</div>

    <div id="blazor-error-ui">
        An unhandled error has occurred.
        <a href="" class="reload">Reload</a>
        <a class="dismiss">🗙</a>
    </div>

    <script src="_framework/blazor.webview.js" autostart="false"></script>
    <script src="accordion.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
```

## 2. Now create the Accordion bootstrap 5 component

In the **Accordion.razor** component include this code: 

```razor
@page "/accordion"
@inject IJSRuntime JS

<h3>Accordion Example with Collapse/Expand Buttons</h3>

<!-- Buttons to Collapse/Expand the Accordion -->
<div class="mb-3">
    <button class="btn btn-primary" @onclick="ExpandAll">Expand All</button>
    <button class="btn btn-secondary" @onclick="CollapseAll">Collapse All</button>
</div>

<!-- Accordion Component -->
<div class="accordion" id="accordionExample">
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                This is the first item's accordion body.
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                This is the second item's accordion body.
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                This is the third item's accordion body.
            </div>
        </div>
    </div>
</div>

@code {
    private async Task ExpandAll()
    {
        await JS.InvokeVoidAsync("toggleAccordion", "expand");
    }

    private async Task CollapseAll()
    {
        await JS.InvokeVoidAsync("toggleAccordion", "collapse");
    }
}
```

## 3. Create a new JavaScript file accordion.js in the wwwroot folder

Include this code in the **accordion.js** file in order to expand and collapse the accordion items:

```javascript
function toggleAccordion(action) {
    let accordionItems = document.querySelectorAll('.accordion-collapse');

    accordionItems.forEach(item => {
        if (action === 'collapse') {
            item.classList.remove('show');  // Collapse all
        } else if (action === 'expand') {
            item.classList.add('show');  // Expand all
        }
    });
}
```

See the application structure

![image](https://github.com/user-attachments/assets/28ab768a-cdce-4757-9830-2996ad63c3b9)

## 4. Modify the wwwroot/index.html to include a refernce to the accordion.js file

```
<script src="accordion.js"></script>
```

This is the whole App.razor code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
    <title>MauiAppBootstrap5</title>
    <base href="/" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/app.css" />
    <link rel="stylesheet" href="MauiAppBootstrap5.styles.css" />
    <link rel="icon" href="data:,">
</head>

<body>

    <div class="status-bar-safe-area"></div>

    <div id="app">Loading...</div>

    <div id="blazor-error-ui">
        An unhandled error has occurred.
        <a href="" class="reload">Reload</a>
        <a class="dismiss">🗙</a>
    </div>

    <script src="_framework/blazor.webview.js" autostart="false"></script>
    <script src="accordion.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
```

## 5. Now replace the existing NavMenu.razor(Blazor component) with a Navbar(Bootstrap 5 component)

We open the the **NavMenu.razor** file and we comment all the code:

![image](https://github.com/user-attachments/assets/37715a33-831e-4493-ab7b-c2d18ca54673)

We modify the **MainLayout.razor** component and include the following code:

```razor
@inherits LayoutComponentBase

<div class="page">
    <!-- Navigation bar at the top with blue background and no Navbar label -->
    <nav class="navbar navbar-expand-lg fixed-top" style="background-color: blue;">
        <div class="container-fluid">
            <!-- Removed Navbar label -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="counter">Counter</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="weather">Weather</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="accordion">Accordion</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main>
        <div class="top-row px-4">
            <a href="https://learn.microsoft.com/aspnet/core/" target="_blank">About</a>
        </div>

        <article class="content px-4">
            @Body
        </article>
    </main>
</div>
```

## 6. Run the application and see the results

### 6.1. MAUI Blazor application running in Samsung Galaxy A14 connected to my laptop

![image](https://github.com/user-attachments/assets/b03d307c-c73c-4643-bcba-bbea345edc65)

![image](https://github.com/user-attachments/assets/e45d4a38-3803-41a6-b480-909c60c8321d)

![image](https://github.com/user-attachments/assets/56a37ae2-3b6d-40de-b9aa-b4fe08fbc40a)

![image](https://github.com/user-attachments/assets/d057aa84-0ca6-4c87-8500-71e03c26b852)

![image](https://github.com/user-attachments/assets/0a502e41-5b42-431b-b09e-c3ecda9fc685)

![image](https://github.com/user-attachments/assets/913be17a-b309-4408-954c-0a1e449c2475)

### 6.2. MAUI Blazor application running in Windows Desktop

![image](https://github.com/user-attachments/assets/40df222d-7b2a-49af-b738-3e61b3fa0562)

![image](https://github.com/user-attachments/assets/6040a605-62fc-4cec-9bec-8023df2a38e0)

![image](https://github.com/user-attachments/assets/adf97ea1-2574-40fd-a870-b093ece353e7)

![image](https://github.com/user-attachments/assets/a4f81444-d719-441f-9d4b-a062784cf09f)

![image](https://github.com/user-attachments/assets/288ef1eb-338b-49e5-988a-c7f1d43570e3)

![image](https://github.com/user-attachments/assets/9631e61e-8603-487a-acd1-395175c4ee8d)

![image](https://github.com/user-attachments/assets/7a0b8bb4-6e67-4983-9e9c-c66a8db6350f)

![image](https://github.com/user-attachments/assets/de660933-6425-4ecc-bbaf-90646d7f11b7)

![image](https://github.com/user-attachments/assets/8808399d-6bea-4a94-b600-726f6a403c98)

![image](https://github.com/user-attachments/assets/9bd03f0d-07a0-47a1-9da2-5930ceaf1ede)



