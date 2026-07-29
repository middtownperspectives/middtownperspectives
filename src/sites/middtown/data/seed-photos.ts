// Photo data for "The Lensman" gallery.
// Local, optimized (long edge 1800px, ~75% quality) imports from src/assets/photos/.

import type { Photo } from '../../../lib/types'

const modules = import.meta.glob<{ default: string }>('/src/assets/photos/*.jpg', { eager: true })

function resolveImage(filename: string): string {
  const mod = modules[`/src/assets/photos/${filename}`]
  if (!mod) throw new Error(`Missing image: ${filename}`)
  return mod.default
}

export const photosByCategory = {
  street: [
  { id: 'p01', site: 'middtown', category: 'street', orientation: 'vertical', src: resolveImage('train-shed-laughter.jpg'), alt: "Two friends share a laugh under Union Station's train shed" },
  { id: 'p05', site: 'middtown', category: 'street', orientation: 'vertical', src: resolveImage('waiting-for-the-bus.jpg'), alt: "Waiting on the curb as the RTD bus rolls in" },
  { id: 'p07', site: 'middtown', category: 'street', orientation: 'vertical', src: resolveImage('boarding-the-train.jpg'), alt: "Passengers board beneath the Travel by Train marquee" },
  { id: 'p11', site: 'middtown', category: 'street', orientation: 'horizontal', src: resolveImage('buell-theatre-stroll.jpg'), alt: "A couple strolls past the Buell Theatre marquee" },
  { id: 'p12', site: 'middtown', category: 'street', orientation: 'vertical', src: resolveImage('museum-of-photography-street.jpg'), alt: "A pedestrian passes the Museum of Photography downtown" },
  { id: 'p21', site: 'middtown', category: 'street', orientation: 'horizontal', src: resolveImage('parade-crowd-portrait.jpg'), alt: "Faces in the crowd at a Denver street parade" },
  { id: 'p22', site: 'middtown', category: 'street', orientation: 'vertical', src: resolveImage('striped-hat-parade.jpg'), alt: "A striped hat rests in the street as marchers pass" },
  { id: 'p23', site: 'middtown', category: 'street', orientation: 'horizontal', src: resolveImage('red-bucket-hat.jpg'), alt: "A red bucket hat stands out in the parade crowd" },
  { id: 'p24', site: 'middtown', category: 'street', orientation: 'vertical', src: resolveImage('phone-up-parade.jpg'), alt: "Capturing the moment, phone held high above the crowd" },
  { id: 'p34', site: 'middtown', category: 'street', orientation: 'horizontal', src: resolveImage('baker-at-work.jpg'), alt: "A baker shapes dough beside racks of fresh loaves" },
  { id: 'p35', site: 'middtown', category: 'street', orientation: 'horizontal', src: resolveImage('utility-crew-at-work.jpg'), alt: "A utility crew works an excavator among the cables" },
  { id: 'p37', site: 'middtown', category: 'street', orientation: 'vertical', src: resolveImage('desk-portrait.jpg'), alt: "A candid portrait across a cluttered desk" },
  { id: 'p41', site: 'middtown', category: 'street', orientation: 'horizontal', src: resolveImage('river-play-breckenridge.jpg'), alt: "Families cool off in the river below the peaks" },
  { id: 'p42', site: 'middtown', category: 'street', orientation: 'horizontal', src: resolveImage('miami-pastel-cyclist.jpg'), alt: "A cyclist rolls past pastel facades on a Miami morning" },
  { id: 'p47', site: 'middtown', category: 'street', orientation: 'horizontal', src: resolveImage('shadow-crossing-woman.jpg'), alt: "Long shadows and hard light on a downtown crosswalk" },
  { id: 'p48', site: 'middtown', category: 'street', orientation: 'horizontal', src: resolveImage('mickey-ears-crowd.jpg'), alt: "A kid beams through the crowd, mouse ears on" },
  { id: 'p50', site: 'middtown', category: 'street', orientation: 'horizontal', src: resolveImage('bodyboarder-at-dusk.jpg'), alt: "Floating easy in the evening swell" },
  { id: 'p51', site: 'middtown', category: 'street', orientation: 'horizontal', src: resolveImage('park-tent-gathering.jpg'), alt: "A quiet moment at the edge of a park gathering" },
  { id: 'p56', site: 'middtown', category: 'street', orientation: 'vertical', src: resolveImage('woman-at-crosswalk.jpg'), alt: "A woman with curly hair waits at a downtown crosswalk, a cyclist passing behind" },
  ],
  misc: [
  { id: 'p17', site: 'middtown', category: 'misc', orientation: 'vertical', src: resolveImage('snow-covered-beetle.jpg'), alt: "A snow-blanketed Beetle waits out the storm" },
  { id: 'p26', site: 'middtown', category: 'misc', orientation: 'vertical', src: resolveImage('alley-reflection.jpg'), alt: "A rowhouse mirrored in a rain-slicked alley" },
  { id: 'p38', site: 'middtown', category: 'misc', orientation: 'horizontal', src: resolveImage('boulder-joes-paint-body.jpg'), alt: "The Flatirons rise behind Joe's Paint & Body on a Boulder morning" },
  { id: 'p43', site: 'middtown', category: 'misc', orientation: 'vertical', src: resolveImage('pier-carousel.jpg'), alt: "The carousel spins at the end of the pier" },
  { id: 'p44', site: 'middtown', category: 'misc', orientation: 'vertical', src: resolveImage('ferris-wheel-and-scooters.jpg'), alt: "Scooters roll toward the Ferris wheel" },
  { id: 'p45', site: 'middtown', category: 'misc', orientation: 'vertical', src: resolveImage('fire-escape-rooftop-view.jpg'), alt: "Fire escapes frame a rooftop cafe between towers" },
  { id: 'p46', site: 'middtown', category: 'misc', orientation: 'vertical', src: resolveImage('cypress-and-city-view.jpg'), alt: "A cypress tree and lamppost overlook the city" },
  { id: 'p49', site: 'middtown', category: 'misc', orientation: 'horizontal', src: resolveImage('lifeguard-tower.jpg'), alt: "A lifeguard tower stands watch over the tree line" },
  ],
  'urban-landscapes': [
  { id: 'arch-01', site: 'middtown', category: 'urban-landscapes', orientation: 'horizontal', src: resolveImage('urban-01.jpg'), alt: "1000 Speer apartment building from Sunken Gardens Park in winter", featured: true },
  { id: 'arch-02', site: 'middtown', category: 'urban-landscapes', orientation: 'vertical', src: resolveImage('urban-02.jpg'), alt: "A steel truss bridge over a rushing creek" },
  { id: 'arch-03', site: 'middtown', category: 'urban-landscapes', orientation: 'vertical', src: resolveImage('urban-03.jpg'), alt: "A wood cabin tucked among trees beside the creek" },
  { id: 'arch-04', site: 'middtown', category: 'urban-landscapes', orientation: 'vertical', src: resolveImage('urban-04.jpg'), alt: "A brick building facade reflected in a puddle, restoration ladder in view", featured: true },
  { id: 'arch-05', site: 'middtown', category: 'urban-landscapes', orientation: 'horizontal', src: resolveImage('urban-05.jpg'), alt: "A backyard pool with a red umbrella and loungers" },
  { id: 'arch-07', site: 'middtown', category: 'urban-landscapes', orientation: 'vertical', src: resolveImage('urban-06.jpg'), alt: "A tin-roofed roadside shack beneath a palm tree" },
  { id: 'arch-08', site: 'middtown', category: 'urban-landscapes', orientation: 'vertical', src: resolveImage('urban-07.jpg'), alt: "Bougainvillea spilling over a wooden fence with a \"Beware of Dog\" sign", featured: true },
  { id: 'arch-09', site: 'middtown', category: 'urban-landscapes', orientation: 'vertical', src: resolveImage('urban-08.jpg'), alt: "A picnic table shaded beneath a tree, a yellow door behind" },
  { id: 'arch-10', site: 'middtown', category: 'urban-landscapes', orientation: 'horizontal', src: resolveImage('urban-09.jpg'), alt: "A pastel two-story building with a bicycle parked outside" },
  { id: 'arch-11', site: 'middtown', category: 'urban-landscapes', orientation: 'horizontal', src: resolveImage('urban-10.jpg'), alt: "The Union Station \"Travel by Train\" sign against a blue sky" },
  { id: 'arch-12', site: 'middtown', category: 'urban-landscapes', orientation: 'horizontal', src: resolveImage('urban-11.jpg'), alt: "A mural-lined stairwell above a graffiti-tagged alley", featured: true },
  { id: 'arch-13', site: 'middtown', category: 'urban-landscapes', orientation: 'vertical', src: resolveImage('urban-12.jpg'), alt: "A quiet stucco courtyard beneath a palm tree" },
  { id: 'arch-14', site: 'middtown', category: 'urban-landscapes', orientation: 'horizontal', src: resolveImage('urban-13.jpg'), alt: "Bougainvillea spilling along a garden path to an old stone house" },
  { id: 'arch-15', site: 'middtown', category: 'urban-landscapes', orientation: 'vertical', src: resolveImage('urban-14.jpg'), alt: "The Colorado State Capitol dome above a market crowd" },
  { id: 'arch-16', site: 'middtown', category: 'urban-landscapes', orientation: 'vertical', src: resolveImage('urban-15.jpg'), alt: "A snow-covered SUV parked beneath a bare tree" },
  { id: 'arch-17', site: 'middtown', category: 'urban-landscapes', orientation: 'vertical', src: resolveImage('urban-16.jpg'), alt: "A colorful downtown skyline dusted with snow" },
  { id: 'arch-20', site: 'middtown', category: 'urban-landscapes', orientation: 'horizontal', src: resolveImage('urban-17.jpg'), alt: "The black-and-white storefront of Boqueria" },
  { id: 'arch-21', site: 'middtown', category: 'urban-landscapes', orientation: 'vertical', src: resolveImage('urban-18.jpg'), alt: "Light rail passing through a steel-and-glass train shed" },
  { id: 'arch-22', site: 'middtown', category: 'urban-landscapes', orientation: 'vertical', src: resolveImage('urban-19.jpg'), alt: "An Amtrak engine arriving trackside downtown", featured: true },
  { id: 'arch-23', site: 'middtown', category: 'urban-landscapes', orientation: 'vertical', src: resolveImage('urban-20.jpg'), alt: "The Capitol dome framed by bare winter trees", featured: true },
  { id: 'arch-26', site: 'middtown', category: 'urban-landscapes', orientation: 'vertical', src: resolveImage('urban-21.jpg'), alt: "A building under restoration beside a rail car, in black and white" },
  { id: 'arch-27', site: 'middtown', category: 'urban-landscapes', orientation: 'horizontal', src: resolveImage('urban-22.jpg'), alt: "A canopy of colorful umbrellas over a plaza" },
  { id: 'arch-28', site: 'middtown', category: 'urban-landscapes', orientation: 'vertical', src: resolveImage('urban-23.jpg'), alt: "Looking up through a canopy of colorful umbrellas" },
  { id: 'arch-29', site: 'middtown', category: 'urban-landscapes', orientation: 'vertical', src: resolveImage('urban-24.jpg'), alt: "A rooftop garden in bloom above the skyline", featured: true },
  { id: 'arch-30', site: 'middtown', category: 'urban-landscapes', orientation: 'vertical', src: resolveImage('urban-25.jpg'), alt: "A neon sign above a flower box on a downtown corner" },
  { id: 'arch-31', site: 'middtown', category: 'urban-landscapes', orientation: 'vertical', src: resolveImage('urban-26.jpg'), alt: "A classic car blurs past the Wells Fargo arches", featured: true },
  { id: 'arch-32', site: 'middtown', category: 'urban-landscapes', orientation: 'horizontal', src: resolveImage('urban-27.jpg'), alt: "A plaza fountain and flower bed downtown" },
  { id: 'arch-33', site: 'middtown', category: 'urban-landscapes', orientation: 'vertical', src: resolveImage('urban-28.jpg'), alt: "Pedestrians pass construction cones near downtown high-rises" },
  { id: 'arch-34', site: 'middtown', category: 'urban-landscapes', orientation: 'vertical', src: resolveImage('urban-29.jpg'), alt: "Balconies and reflections on a downtown high-rise", featured: true },
  { id: 'arch-36', site: 'middtown', category: 'urban-landscapes', orientation: 'vertical', src: resolveImage('urban-30.jpg'), alt: "A lit marquee arrow sign beside a parked Jeep, in black and white" },
  { id: 'arch-37', site: 'middtown', category: 'urban-landscapes', orientation: 'horizontal', src: resolveImage('urban-31.jpg'), alt: "Workers restore a building facade from ladders", featured: true },
  { id: 'arch-38', site: 'middtown', category: 'urban-landscapes', orientation: 'vertical', src: resolveImage('urban-32.jpg'), alt: "A white Beetle parked outside a brick storefront" },
  { id: 'arch-39', site: 'middtown', category: 'urban-landscapes', orientation: 'horizontal', src: resolveImage('urban-33.jpg'), alt: "Union Station's exterior beneath a winter sky" },
  { id: 'arch-40', site: 'middtown', category: 'urban-landscapes', orientation: 'horizontal', src: resolveImage('urban-34.jpg'), alt: "A pedestrian passes snow-dusted storefronts" },
  ],
  'interior-landscapes': [
  { id: 'arch-06', site: 'middtown', category: 'interior-landscapes', orientation: 'vertical', src: resolveImage('interior-01.jpg'), alt: "A hand-painted palm mural above laundromat dryers" },
  { id: 'arch-18', site: 'middtown', category: 'interior-landscapes', orientation: 'vertical', src: resolveImage('interior-02.jpg'), alt: "A coffee shop interior with a wood counter and roaster" },
  { id: 'arch-19', site: 'middtown', category: 'interior-landscapes', orientation: 'vertical', src: resolveImage('interior-03.jpg'), alt: "A hand-lettered \"Coffee / Hot Coffee\" menu board", featured: true },
  { id: 'arch-24', site: 'middtown', category: 'interior-landscapes', orientation: 'vertical', src: resolveImage('interior-04.jpg'), alt: "Washers, dryers, and baskets at a corner laundromat", featured: true },
  { id: 'arch-25', site: 'middtown', category: 'interior-landscapes', orientation: 'horizontal', src: resolveImage('interior-05.jpg'), alt: "Union Station's Great Hall in black and white" },
  { id: 'arch-35', site: 'middtown', category: 'interior-landscapes', orientation: 'vertical', src: resolveImage('interior-06.jpg'), alt: "A warm, softly lit hotel lobby lounge" },
  ],
} satisfies Record<string, Photo[]>

export const seedPhotos: Photo[] = [
  ...photosByCategory.street,
  ...photosByCategory.misc,
  ...photosByCategory['urban-landscapes'],
  ...photosByCategory['interior-landscapes'],
]

export const heroPhoto = {
  src: resolveImage('self-portrait-mirror.jpg'),
  alt: 'Middtown Perspectives — self-portrait with the Leica',
}
