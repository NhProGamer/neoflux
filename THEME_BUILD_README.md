# NeoFlux Theme - Build System

This theme includes its own build system for JavaScript assets, making it self-contained and portable.

## Theme Structure

```
themes/neoflux/
├── assets/
│   └── js/                  # Source JavaScript files
│       ├── particles-config.js  # Particles configuration
│       └── particles-init.js    # Initialization script
├── scripts/
│   └── build-js.js           # Build script (esbuild)
├── static/
│   └── js/                  # Generated files (after build)
│       └── particles-bundle.js # Bundled JavaScript
├── package.json             # Theme dependencies and scripts
└── PARTICLES_README.md       # Particles.js documentation
```

## Getting Started

### 1. Install Theme Dependencies

Navigate to the theme directory and install dependencies:

```bash
cd themes/neoflux
npm install
```

### 2. Build JavaScript Assets

Build the JavaScript bundle:

```bash
npm run build:js
# or
npm run build
```

### 3. Build Your Site

From your project root:

```bash
npm run build:theme-js  # Build theme JavaScript
npm run build:html      # Build Hugo site
npm run build           # Full build (JS + HTML + PDF)
```

## Theme Configuration

The theme includes configuration options in `config.toml`:

```toml
[params.animation]
enable_particles = true      # Enable/disable starry sky animation
particle_count = 120         # Number of stars
particle_color = "#ffffff"     # Star color
particle_speed = 0.15        # Movement speed (0.01-1.0)
```

## Development Workflow

### Watch Mode

For development, you can use the theme's build script directly:

```bash
cd themes/neoflux
npm run build:js -- --watch
```

### Project Integration

The theme's build system is automatically integrated into the main project's build pipeline:

```bash
# From project root
npm run build  # Builds theme JS + Hugo site + PDFs
```

## Customization

### Modifying Particles Configuration

Edit `assets/js/particles-config.js` to customize the starry sky animation:

- Adjust star count, size, and color
- Modify movement patterns and speed
- Change interaction behaviors

### Adding New JavaScript

1. Add your JS files to `assets/js/`
2. Update `scripts/build-js.js` to include them
3. Run `npm run build:js`

## Benefits of Theme-Integrated Build

✅ **Portability**: Theme works anywhere without project-specific build scripts
✅ **Isolation**: Theme dependencies don't conflict with project dependencies
✅ **Versioning**: Theme build system evolves with the theme
✅ **Reusability**: Theme can be used in multiple projects consistently
✅ **Maintainability**: All theme-related code is in one place

## Troubleshooting

### Build Errors

If you encounter build errors:

1. **Check Node.js version**: Requires Node.js >= 16.0.0
2. **Install dependencies**: `cd themes/neoflux && npm install`
3. **Verify file paths**: Ensure all referenced files exist
4. **Check permissions**: Make sure you can write to `static/js/`

### Missing Particles

If particles don't appear:

1. **Verify build**: Run `npm run build:js`
2. **Check configuration**: Ensure `enable_particles = true`
3. **Browser console**: Look for JavaScript errors
4. **Cache issues**: Try hard refresh (Ctrl+F5)

## Advanced Usage

### Custom Build Scripts

You can extend the theme's build system by modifying `scripts/build-js.js`:

```javascript
// Add additional entry points
entryPoints: [
  path.join(assetsPath, 'particles-init.js'),
  path.join(assetsPath, 'your-script.js')  // Add your scripts
]
```

### Environment-Specific Builds

Create different configurations for development vs production:

```bash
# Development build (unminified)
npm run build:js -- --minify=false

# Production build (minified)
npm run build:js
```

## License

The build system and all theme assets are licensed under the same license as the NeoFlux theme.