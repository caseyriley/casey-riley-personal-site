window.addEventListener("DOMContentLoaded", () => {
  
  const navBarProjects = document.getElementById("navbar-c__projects");

  const navBarProjectsDropdown = document.getElementsByName("dropdown-projects");

  navBarProjects.onclick = function toggleProjectsDropdown(){
    console.log(navBarProjectsDropdown[0].classList[1])
    if (navBarProjectsDropdown[0].classList[1] == "hidden"){
      navBarProjectsDropdown[0].classList.remove("hidden")
      navBarProjectsDropdown[0].classList.add("visible")
    }
    else if (navBarProjectsDropdown[0].classList[1] == "visible"){
      navBarProjectsDropdown[0].classList.remove("visible")
      navBarProjectsDropdown[0].classList.add("hidden")
    }
  }
  // -----------dropdown-networks-----------------------------------------
  const navBarNetworks = document.getElementById("navbar-c__networks");

  const navBarNetworksDropdown = document.getElementsByName("dropdown-networks");

  navBarNetworks.onclick = function toggleProjectsDropdown(){
    console.log(navBarNetworksDropdown[0].classList[1])
    if (navBarNetworksDropdown[0].classList[1] == "hidden"){
      navBarNetworksDropdown[0].classList.remove("hidden")
      navBarNetworksDropdown[0].classList.add("visible")
    }
    else if (navBarNetworksDropdown[0].classList[1] == "visible"){
      navBarNetworksDropdown[0].classList.remove("visible")
      navBarNetworksDropdown[0].classList.add("hidden")
    }
  }
})

