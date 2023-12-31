export function Index() {
    return (
        <>
            <div class="h-50 d-flex flex-column">

                <div id="height-cuerpo" class="row">

                    <div class="container-fluid py-5 px-md-5 col">

                        <header class="d-flex align-items-center justify-content-between">
                            <h1>
                                Listado de Personal
                            </h1>
                            <div>
                                <a class="btn btn-outline-success" href="/employees/create">Nuevo Personal</a>
                                <a class="btn btn-outline-primary" data-bs-toggle="collapse" href="#collapseSearch" role="button"
                                    aria-expanded="false" aria-controls="collapseSearch">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-search" viewBox="0 0 16 16">
                                        <path
                                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </a>
                            </div>
                        </header>

                        <main class="col">
                            <div class="collapse" id="collapseSearch">
                                <div class="card card-body">
                                    <form id="formSearch" class="row">
                                        <input placeholder="Apellidos" class="form-control col" type="search" name="sLastName"
                                            id="sLastName" />
                                        <input placeholder="Nombres" class="form-control col" type="search" name="sName" id="sName" />
                                        <div class="d-flex flex-row m-2  justify-content-end gap-2">
                                            <button type="submit" class="btn btn-outline-primary align-items-end">
                                                <span>Buscar</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    class="bi bi-search" viewBox="0 0 16 16">
                                                    <path
                                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                </svg>
                                            </button>
                                            <a id="btnCleanSearch" class="btn btn-outline-danger align-items-end">
                                                <span>Limpiar</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    class="bi bi-x" viewBox="0 0 16 16">
                                                    <path
                                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="overflow-auto">
                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Jerarquía</th>
                                            <th scope="col">Apellido y Nombres</th>
                                            <th scope="col">Edad</th>
                                            <th scope="col">Alta/Ascenso</th>
                                            <th scope="col">Situación</th>
                                            <th scope="col">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody class="m-0 p-0" id="employeesList">

                                    </tbody>
                                </table>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}