# Particles.js Integration - Starry Sky Animation

This integration adds a beautiful starry sky background animation to your Hugo theme using particles.js.

## Features

- ✨ **Starry Sky Animation**: 120 twinkling stars with natural movement
- 🎨 **Customizable**: Configure star count, color, and speed
- 🚀 **Performance Optimized**: Minimal impact on page load
- 🔧 **Easy to Enable/Disable**: Simple configuration toggle
- 🎯 **Non-Intrusive**: Stars are behind all content and don't interfere with interactions

## Configuration

Add these parameters to your `config.toml`:

```toml
[params.animation]
enable_particles = true  # Enable/disable the animation
enable_particles = true  # Enable/disable starry sky animation
particle_count = 120     # Number of stars (default: 120)
particle_color = "#ffffff" # Color of stars (default: white)
particle_speed = 0.15    # Movement speed (0.01-1.0)
```

## Customization Options

### Star Appearance
- **Count**: Adjust `particle_count` (80-200 recommended)
- **Color**: Change `particle_color` (hex format)
- **Size**: Modify in `assets/js/particles-config.js`

### Star Behavior
- **Speed**: Adjust `particle_speed` (0.01-1.0)
- **Twinkle Rate**: Modify opacity animation speed
- **Movement Pattern**: Change movement parameters

### Performance
- **Density**: Adjust based on screen size
- **Retina Detection**: Enable/disable for high-DPI screens
- **Mobile Optimization**: Reduce count on mobile devices

## Technical Details

### Files Structure
```
asets/js/
├── particles-config.js  # Configuration for the starry sky
└── particles-init.js    # Initialization script

layouts/partials/
└── particles.html       # Hugo partial for integration

static/js/
└── particles-bundle.js  # Bundled JavaScript (generated)
```

### Build Process
1. **Install dependencies**: `npm install`
2. **Build JavaScript**: `npm run build:js`
3. **Build site**: `npm run build`

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11 not supported (uses ES6 modules)
- Mobile browsers with JavaScript enabled

## Future Improvements

### Planned Features
1. **Dynamic Configuration**: Load settings from site config
2. **Responsive Density**: Adjust star count based on screen size
3. **Color Themes**: Match stars to site color scheme
4. **Shooting Stars**: Occasional shooting star effect
5. **Performance Modes**: Auto-adjust based on device capabilities

### Optimization Ideas
- **Lazy Loading**: Load particles after page content
- **Progressive Enhancement**: Graceful degradation
- **CSS Variables**: Use theme colors for stars
- **Animation Controls**: Pause/resume animation

## Troubleshooting

### Common Issues

**Particles not showing**:
- Check browser console for errors
- Verify `enable_particles = true` in config
- Ensure JavaScript is not blocked

**Performance issues**:
- Reduce `particle_count`
- Disable on mobile devices
- Check for other JavaScript conflicts

**Build errors**:
- Run `npm install` to install dependencies
- Check file paths in build script
- Verify Node.js version (>= 16.0.0)

## Disabling the Animation

To completely disable the starry sky:

```toml
[params.animation]
enable_particles = false
```

Or remove the partial from `layouts/partials/head.html`:

```html
{{/* {{ partial "particles.html" . }} */}}
```

## License

This integration uses [particles.js](https://github.com/VincentGarreau/particles.js/) under the MIT License.

## Contributing

Contributions are welcome! Please open issues for bugs or feature requests, and submit pull requests for improvements.