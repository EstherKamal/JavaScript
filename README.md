<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Esther Kamal | Portfolio</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="bg-slate-50 text-slate-800 font-sans scroll-smooth">

    <!-- Navigation -->
    <nav class="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">
                <span class="text-xl font-bold tracking-tight text-indigo-600">Esther Kamal</span>
                <div class="hidden md:flex space-x-8 font-medium">
                    <a href="#hero" class="hover:text-indigo-600 transition">Home</a>
                    <a href="#biotech" class="hover:text-indigo-600 transition">Biotech Research</a>
                    <a href="#javascript" class="hover:text-indigo-600 transition">JS Resources</a>
                    <a href="#all-files" class="hover:text-indigo-600 transition">All Documents</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-indigo-50 via-white to-emerald-50">
        <div class="max-w-4xl mx-auto text-center px-4">
            <span class="px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full uppercase tracking-wider">Welcome to my Digital Hub</span>
            <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
                Bridging <span class="text-emerald-600">Biotechnology</span> & <span class="text-indigo-600">Web Development</span>
            </h1>
            <p class="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Explore my academic research in agricultural biotechnology alongside my open-source frontend and JavaScript educational materials.
            </p>
            <div class="mt-10 flex flex-wrap justify-center gap-4">
                <a href="#biotech" class="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg shadow-md transition-all">
                    View Cotton Research
                </a>
                <a href="#javascript" class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition-all">
                    Explore JS Book
                </a>
            </div>
        </div>
    </section>

    <!-- Section 1: Cotton Biotechnology Research -->
    <section id="biotech" class="py-20 bg-white border-b border-slate-100">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl font-bold text-slate-900">Agricultural Biotechnology Research</h2>
                <p class="text-slate-500 mt-2">Academic studies, presentations, and technical reports on cotton genetics and plant physiology.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
                <!-- Cotton Research Report Card -->
                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                    <div>
                        <div class="w-12 h-12 bg-emerald-100 text-emerald-600 flex items-center justify-center rounded-xl mb-4 text-xl">
                            <i class="fa-solid fa-file-invoice"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900">Cotton Research Report (v17)</h3>
                        <p class="text-slate-600 mt-2 text-sm leading-relaxed">
                            A comprehensive technical paper detailing experimental findings, methodology, and scientific data regarding cotton plant development and cultivation metrics.
                        </p>
                    </div>
                    <div class="mt-6">
                        <a href="Cotton research report-17.pdf" target="_blank" class="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                            Open PDF Report <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                        </a>
                    </div>
                </div>

                <!-- Cotton Presentation Card -->
                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                    <div>
                        <div class="w-12 h-12 bg-emerald-100 text-emerald-600 flex items-center justify-center rounded-xl mb-4 text-xl">
                            <i class="fa-solid fa-file-powerpoint"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900">Cotton Research Presentation</h3>
                        <p class="text-slate-600 mt-2 text-sm leading-relaxed">
                            Visual slide deck designed to communicate complex agronomic and molecular findings clearly to an academic audience or seminar group.
                        </p>
                    </div>
                    <div class="mt-6">
                        <a href="Cotton presentation.pdf" target="_blank" class="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                            Open Presentation <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section 2: JavaScript Education Guide -->
    <section id="javascript" class="py-20 bg-slate-900 text-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-12 gap-12 items-center">
                
                <div class="md:col-span-7">
                    <span class="px-3 py-1 text-xs font-semibold bg-indigo-500/20 text-indigo-300 rounded-full uppercase tracking-wider">Educational Resource</span>
                    <h2 class="text-3xl md:text-4xl font-bold mt-4 tracking-tight">JavaScript Guidebook & Fundamentals</h2>
                    <p class="mt-4 text-slate-400 leading-relaxed">
                        An educational handbook created to simplify core programming concepts. This resource covers crucial front-end fundamentals, making programming accessible to students and beginners alike.
                    </p>
                    <ul class="mt-6 space-y-3 text-slate-300">
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-indigo-400"></i> Variables & Data Types</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-indigo-400"></i> Logic, Control Flow & Loops</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-indigo-400"></i> DOM Manipulation Fundamentals</li>
                    </ul>
                    <div class="mt-8">
                        <a href="booky (2)_compress.pdf" target="_blank" class="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold shadow transition">
                            Download / View Guide <i class="fa-solid fa-download text-sm"></i>
                        </a>
                    </div>
                </div>

                <!-- Visual Representation/Mockup Box -->
                <div class="md:col-span-5 bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-3xl shadow-xl flex flex-col justify-between aspect-[4/5]">
                    <div class="flex justify-between items-start">
                        <i class="fa-brands fa-js text-5xl text-yellow-400"></i>
                        <span class="text-xs uppercase tracking-widest font-mono bg-white/20 px-2 py-1 rounded">PDF Format</span>
                    </div>
                    <div>
                        <h4 class="text-2xl font-black tracking-tight leading-tight">JavaScript Fundamentals Book</h4>
                        <p class="text-sm text-indigo-100 mt-2">A self-authored comprehensive guide to modern scripting.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Section 3: Document Repository Directory -->
    <section id="all-files" class="py-20 bg-slate-50">
        <div class="max-w-4xl mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-slate-900">All Repository Documents</h2>
                <p class="text-slate-500 mt-2">Quick-access index to view or download any file from this project environment.</p>
            </div>

            <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div class="divide-y divide-slate-100">
                    
                    <!-- File 1 -->
                    <div class="p-4 sm:px-6 flex items-center justify-between hover:bg-slate-50 transition">
                        <div class="flex items-center gap-4">
                            <i class="fa-solid fa-file-pdf text-red-500 text-2xl"></i>
                            <div>
                                <h4 class="font-semibold text-slate-900">Cotton presentation.pdf</h4>
                                <p class="text-xs text-slate-400">Academic slide deck</p>
                            </div>
                        </div>
                        <a href="Cotton presentation.pdf" target="_blank" class="p-2 hover:bg-slate-200 rounded text-slate-600 transition"><i class="fa-solid fa-external-link"></i></a>
                    </div>

                    <!-- File 2 -->
                    <div class="p-4 sm:px-6 flex items-center justify-between hover:bg-slate-50 transition">
                        <div class="flex items-center gap-4">
                            <i class="fa-solid fa-file-pdf text-red-500 text-2xl"></i>
                            <div>
                                <h4 class="font-semibold text-slate-900">Cotton research report-17.pdf</h4>
                                <p class="text-xs text-slate-400">Research & experimental paper</p>
                            </div>
                        </div>
                        <a href="Cotton research report-17.pdf" target="_blank" class="p-2 hover:bg-slate-200 rounded text-slate-600 transition"><i class="fa-solid fa-external-link"></i></a>
                    </div>

                    <!-- File 3 -->
                    <div class="p-4 sm:px-6 flex items-center justify-between hover:bg-slate-50 transition">
                        <div class="flex items-center gap-4">
                            <i class="fa-solid fa-file-pdf text-red-500 text-2xl"></i>
                            <div>
                                <h4 class="font-semibold text-slate-900">booky (2)_compress.pdf</h4>
                                <p class="text-xs text-slate-400">JavaScript Programming Resource</p>
                            </div>
                        </div>
                        <a href="booky (2)_compress.pdf" target="_blank" class="p-2 hover:bg-slate-200 rounded text-slate-600 transition"><i class="fa-solid fa-external-link"></i></a>
                    </div>

                    <!-- File 4 (System DOC) -->
                    <div class="p-4 sm:px-6 flex items-center justify-between hover:bg-slate-50 transition">
                        <div class="flex items-center gap-4">
                            <i class="fa-solid fa-file-pdf text-slate-400 text-2xl"></i>
                            <div>
                                <h4 class="font-semibold text-slate-900">DOC-20260512-WA0041..pdf</h4>
                                <p class="text-xs text-slate-400">Supplementary attachment document</p>
                            </div>
                        </div>
                        <a href="DOC-20260512-WA0041..pdf" target="_blank" class="p-2 hover:bg-slate-200 rounded text-slate-600 transition"><i class="fa-solid fa-external-link"></i></a>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        <p>&copy; 2026 Esther Kamal. All rights reserved.</p>
    </footer>

</body>
</html>
