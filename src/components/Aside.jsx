export function Aside() {
    return (
        <>
            <aside id="aside" tabindex="-1" class="offcanvas-lg offcanvas-start bg-dark px-3 col-2">
                <div class="offcanvas-header border-bottom text-white">
                    <h5 class="offcanvas-title" id="asideTitle">Menú</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"
                        data-bs-target="#aside"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="nav nav-pills w-100 flex-column g-3">
                        <li class="nav-item">
                            <a href="/" class="nav-link text-white">
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="/employees" class="nav-link text-white" aria-current="page">
                                Empleados
                            </a>
                        </li>
                        <a class="nav-link text-white dropdown-toggle" data-bs-toggle="collapse" href="#collapseMenuAdmin" role="button"
                            aria-expanded="false" aria-controls="collapseMenuAdmin" aria-current="page">
                            Administración
                        </a>
                        <ul class="collapse" id="collapseMenuAdmin">
                            <li>
                                <a href="/users" class="nav-link text-white" aria-current="page">
                                    Usuarios
                                </a>
                            </li>
                            <li>
                                <a href="/categories" class="nav-link text-white">
                                    Jerarquías
                                </a>
                            </li>
                        </ul>
                    </ul>
                    <div class="position-absolute bottom-0 mb-4">
                        <form>
                            <button type="submit" id="logout-button" class="btn btn-outline-primary">Cerrar sesión</button>
                        </form>
                    </div>
                </div>
            </aside>
        </>
    )
}